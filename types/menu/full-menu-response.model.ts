import { Options } from "./full-menu.model"

export type FullMenuResponse = {
    name: string
    id: string
    fullPrice: number
    discountedPercent: number
    largeImage?: string
    options: Array<Options>
}
