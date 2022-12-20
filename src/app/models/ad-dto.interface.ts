import { Guid } from 'guid-typescript';
export class AdDto{
   // export interface AdDto{
    id: string;
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
region?: any
categoryId: Guid
//linkPhoto: ByteLengthQueuingStrategy
price: number
possibleDelivery: boolean
//userId: Guid
}