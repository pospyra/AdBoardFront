
import { JsonPipe } from '@angular/common';
import { Component, HostListener, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import { combineLatest, combineLatestWith, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
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
 // providers :[FilterComponent]
})

export class HomePageComponent implements OnInit {
  public category$ =  this._categoryService.getListCategory();
  
  readonly form = this.fb.group({ 
    categoryId: [ Validators.required ]
  })

   ads : AdDto[] ;
   //ads : any ;
   user: UserDto[];

   public pageSize =6;
   public pageNumber =1;
   public isLoading  : boolean = true;
   //public adName : string;
  // public AdName : string = (<HTMLInputElement>document.getElementById('adNameSearch')).value ;

   constructor(
    private fb : FormBuilder, 
    private _adApiService: AdApiService, 
    private _categoryService: CategoryApiService,
     private _userService : UserApiService, 
     private route : ActivatedRoute) {
}

   ngOnInit() : void{
   this.route.paramMap.subscribe(paramMap => console.log(paramMap.get('AdName')));
    // this.route.params.subscribe(params => {
    //   this.AdName = params['AdName']
    //   console.log("URL id has changed")
      this.onSubmit();
  }

 onSubmit(){
  // search?: string
  //const adName = search;
 // console.log(search);
  const adName = (<HTMLInputElement>document.getElementById('adNameSearch')).value;
  //var categoryId = this.form.getRawValue();
  const categoryId= Guid.parse("a0e2d676-ce6d-4a42-aa59-901e5b4332cb");
  var possibleDelivery = true;
  var price = 12;

 /*  const category$ = this._categoryService.getListCategory(); */
 //const ad$ = this._adApiService.getList();
 const users$  = this._userService.getUserList();
  const ad$ = this._adApiService.getAdFilter( 1, 3, adName, categoryId, possibleDelivery, price);
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
   
  //  ngOnInit(): void {

  //    const users$  = this._userService.getUserList();
  //   /*  const category$ = this._categoryService.getListCategory(); */
  //   //const ad$ = this._adApiService.getList();
  //    const ad$ =    this._adApiService.getAdPage( 1, this.pageSize);
  //    combineLatest([/* category$, */ users$, ad$]).subscribe(response=>{
  //     /*  const category = response[0]; */
  //      const user = response[0];
  //      const ad = response[1];
  //      this.isLoading = false;
  //      this.ads = ad['map']((item:any)=>{
  //        let adsExtented  = item;
  //        adsExtented.userName = user.find(user=> user.id === item.userId)?.name
  //      /*   adsExtented.categoryName = category.find(category=> category.subCategoryId === item.categoryId )?.categoryId;*/
  //        return adsExtented;   
  //      })
  //    }); 
  //   }
    

  onChange(index: number) {
    this.pageNumber = index;
    this.isLoading = true;
    const users$  = this._userService.getUserList();
      const category$ = this._categoryService.getListCategory();
     // const ad$ = this._adApiService.getList();
     const ad$ = this._adApiService.getAdPage(index , this.pageSize );
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

