import { ShortMenuResponse } from "../menu/short-menu-response.model"
import { RestaurantResponse } from "../restaurant/reataurant-response.model"

export type SuccessResponse<D> = {
    success: boolean
    data: D
}

export type ErrorResponse = {
    success: boolean
    message: string
}

export interface Data {
    restaurant: RestaurantResponse
    menus: ShortMenuResponse
}

