import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthService } from './auth.service';
import { Route, Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {


  constructor(private _auth : AuthService, private nzNotificationService : NzNotificationService,  private route : Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    return next.handle(request).pipe(
      catchError((err) =>{
      if(err.status === 401 || err.status === 403){
        this.nzNotificationService.error('Error', 'Вы не авторизованы');
       this.route.navigateByUrl('/login');
      }else if(err.status === 400 || err.status === 500){
        this.nzNotificationService.error('Error', err.error.message);
      }
      return throwError(err);
      })
    );
  }
}
