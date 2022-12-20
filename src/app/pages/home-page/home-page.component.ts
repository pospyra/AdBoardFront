
import { JsonPipe } from '@angular/common';
import { Component, HostListener, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { BehaviorSubject, combineLatest, combineLatestWith, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import {AdDto} from 'src/app/models/ad-dto.interface' ;
import { CategoryDto } from 'src/app/models/category-dto.interface';
import { UserDto } from 'src/app/models/user-dto.interface';
import { AdApiService } from 'src/app/services/ad-api.service';
import { CategoryApiService } from 'src/app/services/category-api.service';
import { UserApiService } from 'src/app/services/user-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
 // providers :[FilterComponent
})

export class HomePageComponent implements OnInit {

  readonly formSearch = this.fb.group({ 
    categoryId: [ ]
  })

  public category$ =  this._categoryService.getListCategory();
   ads : AdDto[] ;
   user: UserDto[];
   //category: null;
   category: string = "";

   public pageSize =23;
   public pageNumber =1;
   public isLoading  : boolean;
   //public adName : string;
  // public AdName : string = (<HTMLInputElement>document.getElementById('adNameSearch')).value ;

   constructor(
    private fb : FormBuilder, 
    private _adApiService: AdApiService, 
    private _categoryService: CategoryApiService,
    private _userService : UserApiService, 
    private route : ActivatedRoute) {}

   ngOnInit() : void{
    this.route.paramMap.subscribe(paramMap => console.log(paramMap.get('AdName')));
    this.route.paramMap.subscribe(paramMap => console.log(paramMap.get('CategoryId')));
  // this.route.paramMap.subscribe(paramMap => console.log(paramMap.get('AdName')));
    // this.route.params.subscribe(params => {
    //   this.AdName = params['AdName']
    //   console.log("URL id has changed")
    this.onSubmit()
  }

  deleteAd(id: string): void{
    this._adApiService.deleteAd(id)
  }

 onSubmit(){
  const adName = (<HTMLInputElement>document.getElementById('adNameSearch')).value;
  const categoryId = this.formSearch.getRawValue();
  const possibleDelivery = true;
  var price = 12;
  const users$  = this._userService.getUserList();
  const ad$ = this._adApiService.getAdFilter( this.pageNumber, this.pageSize, adName,possibleDelivery, this.category);
  combineLatest([/* category$, */ users$, ad$]).subscribe(response=>{
   /*  const category = response[0]; */
    const user = response[0];
    const ad = response[1];
    this.isLoading = false;
    this.ads = ad['map']((item:any)=>{
      let adsExtented  = item;
      adsExtented.userName = user.find(user=> user.id === item.userId)?.name
    /*   adsExtented.categoryName = category.find(category=> category.subCategoryId === item.categoryId )?.categoryId;*/
      return adsExtented;  
    })
  }); 
}


   
  onChange(index: number) {
    // console.log(search);
  const adName = (<HTMLInputElement>document.getElementById('adNameSearch')).value;
  const categoryId = this.formSearch.getRawValue();
  var possibleDelivery = true;
  var price = 12;
    this.pageNumber = index;
    this.isLoading = true;
    const users$  = this._userService.getUserList();
      const category$ = this._categoryService.getListCategory();
     // const ad$ = this._adApiService.getList();
        const ad$ = this._adApiService.getAdFilter( index, this.pageSize, adName,possibleDelivery, this.category);
      combineLatest([/* category$, */ users$, ad$]).subscribe(response=>{
       /*  const category = response[0]; */
        const user = response[0];
        const ad = response[1];
        this.isLoading = false;
        this.ads = ad['map']((item:any)=>{
          let adsExtented  = item;
          adsExtented.userName = user.find(user=> user.id === item.userId)?.name
        /*   adsExtented.categoryName = category.find(category=> category.categoryId === item.categoryId )?.subCategoryName; */
          this.isLoading = false;
          return adsExtented; 
        })
      }); 
  }

  
}

// onSubmit(adName: string, categoryId: string, possibleDelivery: boolean){
//   adName = (<HTMLInputElement>document.getElementById('adNameSearch')).value;
//   categoryId = this.category;
//   possibleDelivery = true;
//   var ads =  this._adApiService.getAds(adName, categoryId, possibleDelivery );
//   return ads;
// }
  
 
  /*   this._userService.getUserList().subscribe(user =>{
      this._categoryService.getListCategory().subscribe(category =>{
        this._adApiService.getList().subscribe(item =>{      
          this.ads =  item.map(ad =>{
            let adsExtented  = ad;
            adsExtented.userName = user.find(user=> user.id === ad.userId)?.name
            adsExtented.categoryName = category.find(category=> category.id === ad.categoryId )?.name;
            return adsExtented; 
      });
    }); */

