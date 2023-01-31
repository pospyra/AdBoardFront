import { Guid } from 'guid-typescript';
export class AdDto{
   // export interface AdDto{
    id: string;
    adName: string;
    categoryId: Guid;
    categoryName : string;
    subCategoryId: Guid;
    description: string;
    photo: string;
    price: number;
    possibleOfDelivery: boolean;
    userId: Guid;
    userName: string;
}

export interface CreateAd{
adName: string
description: string
region?: any
categoryId: string
//Photo: ByteLengthQueuingStrategy
price: number
possibleDelivery: boolean
//userId: Guid
}