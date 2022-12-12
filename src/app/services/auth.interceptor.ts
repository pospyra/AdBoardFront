import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from './auth.service';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthApiService } from './auth-api.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private _auth : AuthApiService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const token = this._auth.token
    if(token){
      const tokenRequest = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${token}`),
      });
      return next.handle(tokenRequest);
    }
    return next.handle(request);
    }
}
