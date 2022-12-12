import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { AdDto } from './models/ad-dto.interface';
import { AdApiService } from './services/ad-api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AdBoardFront'; 

/*  ad : any; */

/* 
  ads: Ad[] = [
    { name : 'Name 1' , description: 'Description1', price: 123 , autor : 'Autor1' },
    { name : 'Name 2' , description: 'Description2', price: 1235 , autor : 'Autor2' },
    { name : 'Name 3' , description: 'Description3', price: 123456 , autor : 'Autor3' },
  ];  */
 
  ads : AdDto[] =[];
  constructor(private _adApiService: AdApiService) { }

  ngOnInit(): void {
/*     this._adApiService.getList()
    .subscribe(items =>{
      this.ads =  items;
  }); */ }
/*   getAd(){
    console.log('Get Ad');
    return this._adApiService.getAd()
    .subscribe(response =>{
      console.log(response);
      this.ad = response;
  }); 
} */
}
    
