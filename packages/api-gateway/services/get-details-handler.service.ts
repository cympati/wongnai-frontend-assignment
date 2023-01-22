
import { Request, Response } from "express";
import { SuccessResponse, ErrorResponse, Data } from "../../../types/common/response"
import { ShortMenu } from "../../../types/menu/short-menu.model"
import { ShortMenuDetails, ShortMenuResponse } from "../../../types/menu/short-menu-response.model"
import { axios } from '../api';
import { Restaurant } from "@apiType/restaurant/restaurant.model";
import { formattedNow } from "./common.service";
import { RestaurantResponse } from "@apiType/restaurant/reataurant-response.model";

const GetDetailsHandler = async (req: Request, res: Response) => {
    // Retrieve ID from params
    const { restaurantId } = req.params

    let restaurantDetails: Restaurant;
    let isClosed = false;
    let menusName: Array<string>;
    let menusDetails: Array<ShortMenu>;
    let normal: Array<ShortMenuDetails> = [];
    let promotion: Array<ShortMenuDetails> = [];
    let recommended: Array<ShortMenuDetails> = [];

    try {
        // Restaurant
        const result = await axios.get(
            `https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/${restaurantId}.json`
        );
        restaurantDetails = result.data

        // Check restaurant opens or not
        const now = formattedNow()
        if (now < restaurantDetails.activeTimePeriod.open || now > restaurantDetails.activeTimePeriod.close) isClosed = true;

        const restaurant: RestaurantResponse = {
            name: restaurantDetails.name,
            id: restaurantDetails.id,
            isClosed: isClosed,
            openTime: restaurantDetails.activeTimePeriod.open,
            coverImage: restaurantDetails.coverImage,
        }

        // Menu
        menusName = restaurantDetails.menus
        menusDetails = await Promise.all(
            menusName.map(async (menu) => {
                const url =
                    `https://us-central1-wongnai-frontend-assignment.cloudfunctions.net/api/restaurants/${restaurantId}/menus/${menu}/short.json`;
                const menuDetail = await axios.get(url);
                return menuDetail.data;
            })
        );

        let bestPercentSold: number = 0;
        for (let i = 0; i < menusDetails.length; i++) {
            const sold = menusDetails[i].sold
            const totalInStock = menusDetails[i].totalInStock
            const percentSold = (sold / (sold + totalInStock)) * 100
            if (percentSold > bestPercentSold) bestPercentSold = percentSold
        }

        menusDetails.forEach((el) => {
            const percentSold = (el.sold / (el.sold + el.totalInStock)) * 100
            const details: ShortMenuDetails = {
                name: el.name,
                id: el.id,
                thumbnailImage: el.thumbnailImage ? el.thumbnailImage : "",
                fullPrice: el.fullPrice,
                discountedPercent: el.discountedPercent,
            }
            // Find Promotion menu
            console.log(now, el.discountedTimePeriod?.begin, el.discountedTimePeriod?.end);
            if (el.discountedTimePeriod && (now >= el.discountedTimePeriod.begin && now <= el.discountedTimePeriod.end)) {
                promotion.push(details)
            }
            // Find Recommended menu
            else if (percentSold == bestPercentSold) recommended.push(details)
            // Find Normal menu
            else normal.push(details)


        });


        const menus: ShortMenuResponse = {
            promotion: promotion,
            recommended: recommended,
            normal: normal,
        }

        // Send back to web
        const info: SuccessResponse<Data> = {
            success: true,
            data: {
                restaurant: restaurant,
                menus: menus
            }
        }
        res.json(info)

    } catch {
        const errorResponse: ErrorResponse = {
            success: false, message: 'Unable to fetch data from Wongnai API'
        }
        return res.status(500).json(errorResponse)
    }
}

export default GetDetailsHandler