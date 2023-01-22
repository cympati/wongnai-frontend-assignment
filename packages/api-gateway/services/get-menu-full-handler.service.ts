
import { Request, Response } from "express";
import { SuccessResponse, ErrorResponse } from "../../../types/common/response"
import { FullMenu } from "../../../types/menu/full-menu.model"
import { FullMenuResponse } from "../../../types/menu/full-menu-response.model"
import { axios } from '../api';

const GetFullMenuHandler = async (req: Request, res: Response) => {
    const { restaurantId, menuName } = req.params
    let menu: FullMenu;

    try {
        const result = await axios.get(`/restaurants/${restaurantId}/menus/${menuName}/full.json`)
        menu = result.data

        const info: SuccessResponse<FullMenuResponse> = {
            success: true,
            data: {
                name: menu.name,
                id: menu.id,
                fullPrice: menu.fullPrice,
                discountedPercent: menu.discountedPercent,
                largeImage: menu.largeImage,
                options: menu.options
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

export default GetFullMenuHandler