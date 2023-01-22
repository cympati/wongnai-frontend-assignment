import { DiscountedTimePeriod } from './short-menu.model'
export interface FullMenu {
    name: string
    id: string
    thumbnailImage?: number
    fullPrice: number
    discountedPercent: number
    discountedTimePeriod: DiscountedTimePeriod
    sold: number
    totalInStock: number
    largeImage?: string
    options: Array<Options>
}

export type Options = {
    label: string
    choices: Array<Choices>
}

export type Choices = {
    label: string
}