export interface Restaurant {
    name: string
    id: number
    coverImage: string
    menus: Array<string>
    activeTimePeriod: ActiveTimePeriod
}

export interface ActiveTimePeriod {
    open: string
    close: string
}