export interface EditAd{
    id: string
    adName: string
    description: string
    region?: any
    categoryId: string
    linkPhoto?: ByteLengthQueuingStrategy
    price: number
    possibleDelivery: boolean
    userId?: string
    }