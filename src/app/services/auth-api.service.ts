import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BehaviorSubject, catchError, map, Observable, of, retry,  tap,  throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import {  UserLogin, UserRegister } from '../models/user';
import { UserDto } from '../models/user-dto.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {
  private userSubject: BehaviorSubject<UserDto>;
  public userCur: Observable<UserDto>;
  
  constructor(private _http : HttpClient, private router : Router) {
  }

  get token():string | null{
    return localStorage.getItem('token');
  }

  set token(value : string| null){
    if(!value){
      return;
    }
    localStorage.setItem('token', value);

  }


/*   login(user: UserLogin): Observable<string>{
    const body={login : user.login, password : user.password}
    this._http.post(`${environment.host}/User/login`, user);
    return of('TOKENTOKENTOKEN')
  } */
  
  registration(userRegister : UserRegister) : Observable<any>{
      return this._http.post(`${environment.host}/User/api/User/Registration`, userRegister);
  }

  login(user: any): Observable<any>{
   return this._http.post(`${environment.host}/User/login`, user)
   .pipe(tap((res : any)=>{
   this.token = res.token;
   this.router.navigateByUrl('/');
   }));
  }

  public logout(): void {
    localStorage.removeItem('user');
    this.userSubject.next(null);
  }
}
