import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category, CategoryDto } from '../models/category-dto.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoryApiService {

  constructor(private _http : HttpClient) { }

/*   getListCategory(): Observable<any>{
    return this._http.get<any>(`${environment.host}/Category`);
    };

  } */

  
   getListCategory(): Observable<any>{
    return this._http.get<any>(`${environment.host}/Category`).pipe(map(category=>{
      return this.arrayToNzCascade(category);
    }));

  } 

  private arrayToNzCascade(array: Category[]) {
    return array.map(item  => {
      const processed =  {
        key: item.id,
        title: item.name,
      } as any;

      if (item.subCategories?.length) {
        processed.children = this.arrayToNzCascade(item.subCategories);
      } else {
        processed.isLeaf = true;
      }
      return processed;
    })
  }
}

