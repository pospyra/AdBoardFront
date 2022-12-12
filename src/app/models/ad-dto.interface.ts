import { Guid } from 'guid-typescript';
export interface AdDto{
    id: Guid;
    adName: string;
    categoryId: Guid;
    categoryName : string;
    subCategoryId: Guid;
    description: string;
    price: number;
    possibleOfDelivery: boolean;
    userId: Guid;
    userName: string;
}

export interface CreateAd{
adName: string
description: string
region: string
categoryId: Guid
//linkPhoto: ByteLengthQueuingStrategy
price: number
possibleDelivery: boolean
//userId: Guid
}