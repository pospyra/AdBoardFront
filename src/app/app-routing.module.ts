import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAdComponent } from './components/create-ad/create-ad.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SelectedAdPageComponent } from './pages/selected-ad-page/selected-ad-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent, pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'selected', component: SelectedAdPageComponent},
  {path: 'register', component: RegistrationComponent},
  {path: 'createAd', component: CreateAdComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
