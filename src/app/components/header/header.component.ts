import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { combineLatest } from 'rxjs';
import { AdDto } from 'src/app/models/ad-dto.interface';
import { Category, CategoryDto } from 'src/app/models/category-dto.interface';
import { UserDto } from 'src/app/models/user-dto.interface';
import { HomePageComponent } from 'src/app/pages/home-page/home-page.component';
import { AdApiService } from 'src/app/services/ad-api.service';
import { CategoryApiService } from 'src/app/services/category-api.service';
import { UserApiService } from 'src/app/services/user-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [HomePageComponent]
})
export class HeaderComponent implements OnInit {
  ads : AdDto[] ;
  user: UserDto[];
  category: Category[] = [];

  public pageSize =8;
  public pageNumber =1;
  public isLoading: boolean = true;
  search: string;


  constructor(private _categoryApiService : CategoryApiService, private _adApiService : AdApiService, private _userService : UserApiService, private _filter : HomePageComponent) { }

  ngOnInit(): void {
  }
  alert(){
    console.log('click');
    return this._categoryApiService.getListCategory()
    .subscribe(response =>{
      console.log(response);
      this.category = response;     
    });
}

onSubmit(){
 // this._adApiService.search$.next(this.search)
//this._filter.onSubmit(this.search);
}
// onSubmit() : void{
//   const adName =(<HTMLInputElement>document.getElementById('adNameSearch')).value;
//   const categoryId  = (Guid.parse('a0e2d676-ce6d-4a42-aa59-901e5b4332cb')) ;
//   var possibleDelivery = true;
// var price = 12;

//   const users$  = this._userService.getUserList();
//  /*  const category$ = this._categoryService.getListCategory(); */
//  //const ad$ = this._adApiService.getList();
//   const ad$ =    this._adApiService.getAdFilter( 1, this.pageSize, adName, categoryId, possibleDelivery, price);
//   combineLatest([/* category$, */ users$, ad$]).subscribe(response=>{
//    /*  const category = response[0]; */
//     const user = response[0];
//     const ad = response[1];
//     this.isLoading = false;
//     this.ads = ad['map']((item:any)=>{
//       let adsExtented  = item;
//       adsExtented.userName = user.find(user=> user.id === item.userId)?.name
//     /*   adsExtented.categoryName = category.find(category=> category.subCategoryId === item.categoryId )?.categoryId;*/
//       return adsExtented;  

//     })
//   }); 
// }

}
