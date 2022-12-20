import { Guid } from 'guid-typescript';
import { AdDto } from './ad-dto.interface';
import { CategoryDto } from './category-dto.interface';
export class Ad{
    id: Guid;
    adName: string;
    categoryId: Guid;
    subCategoryId: Guid;
    description: string;
    price: number;
    possibleOfDelivery: boolean;
    userId: Guid;

    constructor(dto : AdDto ){
    //this.id = dto.id;
    this. adName=  dto.adName;
    this.categoryId = dto.categoryId;
    this.subCategoryId = dto.subCategoryId;
    this.description= dto.description;
    this.price = dto.price;
    this.possibleOfDelivery= dto.possibleOfDelivery;
    this.userId = dto.userId;
    }
}

export class AdFilter{
    currentPage?: number
    size?: number
    id?: string
    adName?: string
    categoryId?: string
    possibleOfDelivery?: boolean
    price?: number
}
