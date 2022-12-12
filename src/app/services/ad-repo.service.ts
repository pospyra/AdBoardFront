
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { Ad } from '../models/ad';
import { AdApiService } from './ad-api.service';

@Injectable({
  providedIn: 'root'
})
export class AdRepoService {

  private _listCash$ = new BehaviorSubject<Ad[]>(null);
  constructor(private _adApi: AdApiService) { }

 /*  list(): Observable<Ad[]>{

    if(this._listCash$.value){
      return of(this._listCash$.value);
    } 

    return this._adApi.getList()
    .pipe(
        map(dtos => dtos.map(dto => new Ad(dto)))
    );
  } */
}