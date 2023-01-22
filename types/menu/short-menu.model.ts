export interface ShortMenu {
    name: string
    id: string
    thumbnailImage?: string
    fullPrice: number
    discountedPercent: number
    discountedTimePeriod?: DiscountedTimePeriod
    sold: number
    totalInStock: number
}

export type DiscountedTimePeriod = {
    begin: string
    end: string
}