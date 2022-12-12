
import { Guid } from 'guid-typescript';
export interface CategoryDto{
    id: Guid,
    name: string,
    ad: null,
    subCategories:  [
      {
      id : Guid
      name: string
      categoryId: Guid
      category: null
  }]  
}

export class Category{
  id: Guid;
  name: string;
  subCategories: Category[]; 
}