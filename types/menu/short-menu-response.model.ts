export interface ShortMenuResponse {
    promotion: Array<ShortMenuDetails>
    recommended: Array<ShortMenuDetails>
    normal: Array<ShortMenuDetails>
}

export type ShortMenuDetails = {
    name: string
    id: string
    thumbnailImage?: string
    fullPrice: number
    discountedPercent: number
}
