import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AdsComponent } from './components/ads/ads.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ru_RU } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ReplaySubject } from 'rxjs';
import { SelectedAdPageComponent } from './pages/selected-ad-page/selected-ad-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationModule, NzNotificationService } from 'ng-zorro-antd/notification';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { AuthInterceptor } from './services/auth.interceptor';
import { ErrorInterceptor } from './services/error.interceptor';
import {NzCardModule} from "ng-zorro-antd/card";
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { CreateAdComponent } from './components/create-ad/create-ad.component';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { RouterModule } from '@angular/router';
import { FilterComponent } from './components/filter/filter.component';
import { RecaptchaModule, RecaptchaFormsModule  } from "ng-recaptcha";
import { EditAdComponent } from './components/edit-ad/edit-ad.component';
import { NzUploadModule } from 'ng-zorro-antd/upload';

//import { BrowserModule } from "@angular/platform-browser";
registerLocaleData(ru)

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AdsComponent,
    HomePageComponent,
    SelectedAdPageComponent,
    LoginComponent,
    RegistrationComponent,
    CreateAdComponent,
    FilterComponent,
    EditAdComponent,
  ],
  imports: [
    NzUploadModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzMessageModule,
    NzNotificationModule,
    NzButtonModule,
    NzInputModule,
    NzLayoutModule,
    NzCardModule,
    NzIconModule,
    NzSpinModule,
    NzAlertModule,
    NzPaginationModule,
    NzTreeSelectModule
    
  ],
  providers: [
    { provide: NZ_I18N, useValue: ru_RU },
   { provide: DEFAULT_CURRENCY_CODE, useValue: 'RUB' },  
   { provide: LOCALE_ID, useValue: 'ru' },  
   { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, 
   { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }, 
    NzMessageService,
    NzNotificationService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
