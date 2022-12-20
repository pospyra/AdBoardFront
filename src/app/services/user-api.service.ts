import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CategoryDto } from '../models/category-dto.interface';
import { UserDto } from '../models/user-dto.interface';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  static getUserList() {
    throw new Error('Method not implemented.');
  }

  constructor(private _http : HttpClient) { }

  getUserList() : Observable<UserDto[]>{
    return this._http.get<UserDto[]>(`${environment.host}/User`);
  }

  // public getById(id: string): Observable<User> {
  //   return this._http.get<User>(`${environment.host}/User/getById?Id=${id}`);
  // }

  public getCurrentUser(){

  }
}
