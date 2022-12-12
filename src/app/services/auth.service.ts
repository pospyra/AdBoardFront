import { Injectable } from '@angular/core';

const AUTh_TOKEN = 'ADBOARD_AUTh_TOKEN'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private _token : string = null;
  constructor() { }



  /* getToken() : string{
    if(this._token){
      return this._token
    }
    const token = JSON.parse(localStorage.getItem(AUTh_TOKEN));
    if(token){
      this._token = token;
    }
    return token;
  }

  login(token : string){
    localStorage.setItem(AUTh_TOKEN, JSON.stringify(token));
    this._token=token;
  }
  
    logout(){
    localStorage.setItem(AUTh_TOKEN, JSON.stringify(null))
    } */
  }

