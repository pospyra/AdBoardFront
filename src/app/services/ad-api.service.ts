import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ad, AdFilter } from '../models/ad';
import {  AdDto, CreateAd } from '../models/ad-dto.interface';
import { EditAd } from '../models/editAd';
import { GetPagedResult } from '../models/get_page-dto.interface';
import { UserApiService } from './user-api.service';


@Injectable({
  providedIn: 'root'
})
export class AdApiService {

public search$ = new BehaviorSubject("");
filter$: any = new BehaviorSubject<AdFilter>(new AdFilter());
public isLoading  : boolean = true;
public pageSize =23;
public pageNumber =1;
ads : AdDto[] ;

  constructor(private _http: HttpClient, private _userService: UserApiService, private _adApiService: AdApiService) { }
  
/* 
  getList(): Observable<AdDto[]>{
    return this._http.get<AdDto[]>(`${environment.host}/Ad`);
  } */


  getAdPage(offset: number, limit: number) : Observable<GetPagedResult<AdDto[]>>{
    let url = `${environment.host}/Ad?take=${offset}&skip=${limit}`;
    return this._http.get<GetPagedResult<AdDto[]>>(url);
}

getAdFilter(offset: number, limit: number, 
  adName?: string,
  possibleOfDelivery?: any,
  categoryId?: string, 
  userId?: string
  ) : Observable<GetPagedResult<AdDto[]>>{
  let url = `${environment.host}/Ad/filterParam?take=${offset}&skip=${limit}&AdName=${adName}&CategoryId=${categoryId}&PossibleOfDelivery=${possibleOfDelivery}&userId=${userId}`;
  return this._http.get<GetPagedResult<AdDto[]>>(url);
}

pageFilter(
  offset: number, limit: number
  ): Observable<GetPagedResult<AdFilter>>{
  let url = `${environment.host}/Ad/pageFilter?`;
    const filter = this.filter$.getValue();
    Object.keys(filter).forEach((key) => {
      if (filter[key]) {
        url += `&${key}=${filter[key]}`;
      }
    });
    url += `&currentPage=${offset}&size=${limit}`;
    return this._http.get<GetPagedResult<AdFilter>>(url);
  }
  
  public getById(id: string): Observable<Ad>{
    return this._http.get<Ad>(`${environment.host}/Ad?=${id}`);
  }

  public createAd(createAd : CreateAd) : Observable<any>{
    return this._http.post(`${environment.host}/Ad/createAd`, createAd);
  }

  public deleteAd(id: string): void{
      this._http.delete<string>(`${environment.host}/Ad?id=${id}`).subscribe();
  }

  public editAd( editAd?: EditAd): Observable<any>{
    return this._http.put<any>(`${environment.host}/Ad/update`, editAd);
  } 





  
  // public getAds(adName:string, categoryId: string, possibleDelivery: boolean)
  // {
  //   const users$  = this._userService.getUserList();
  //   const ad$ = this.getAdFilter( this.pageNumber, this.pageSize, adName,possibleDelivery, categoryId);
  //   combineLatest([/* category$, */ users$, ad$]).subscribe(response=>{
  //    /*  const category = response[0]; */
  //     const user = response[0];
  //     const ad = response[1];
  //     this.isLoading = false;
  //     this.ads = ad['map']((item:any)=>{
  //       let adsExtented  = item;
  //       adsExtented.userName = user.find(user=> user.id === item.userId)?.name
  //     /*   adsExtented.categoryName = category.find(category=> category.subCategoryId === item.categoryId )?.categoryId;*/
  //       return adsExtented;  
  //     })
  //   }); 
  // }

 // public updateAd()
}

// getAdFilter(filerAd : FilterAd) : Observable<GetPagedResult<AdDto[]>>{
//   let url = `${environment.host}/Ad/filterParam?take=${offset}&skip=${limit}&AdName=${adName}&CategoryId=${categoryId}&PossibleOfDelivery=${possibleOfDelivery}&Price=${price}`;
//   return this._http.get<GetPagedResult<AdDto[]>>(url);
// }

function UntilDestroy() {
  throw new Error('Function not implemented.');
}

