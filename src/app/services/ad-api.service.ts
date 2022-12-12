import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {  AdDto, CreateAd } from '../models/ad-dto.interface';
import { GetPagedResult } from '../models/get_page-dto.interface';

@Injectable({
  providedIn: 'root'
})
export class AdApiService {


  constructor(private _http: HttpClient) { }
/* 
  getList(): Observable<AdDto[]>{
    return this._http.get<AdDto[]>(`${environment.host}/Ad`);
  } */

  createAd(createAd : CreateAd) : Observable<any>{
    return this._http.post(`${environment.host}/Ad/createAd`, createAd);
}


  getAdPage(offset: number, limit: number) : Observable<GetPagedResult<AdDto[]>>{
    let url = `${environment.host}/Ad?take=${offset}&skip=${limit}`;
    return this._http.get<GetPagedResult<AdDto[]>>(url);
}

getAdFilter(offset: number, limit: number, adName : string, categoryId : Guid, possibleOfDelivery: boolean, price : number) : Observable<GetPagedResult<AdDto[]>>{
  let url = `${environment.host}/Ad/filterParam?take=${offset}&skip=${limit}&AdName=${adName}&CategoryId=${categoryId}&PossibleOfDelivery=${possibleOfDelivery}&Price=${price}`;
  return this._http.get<GetPagedResult<AdDto[]>>(url);
}

// getAdFilter(filerAd : FilterAd) : Observable<GetPagedResult<AdDto[]>>{
//   let url = `${environment.host}/Ad/filterParam?take=${offset}&skip=${limit}&AdName=${adName}&CategoryId=${categoryId}&PossibleOfDelivery=${possibleOfDelivery}&Price=${price}`;
//   return this._http.get<GetPagedResult<AdDto[]>>(url);
// }



}
