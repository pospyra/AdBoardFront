import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AdApiService } from 'src/app/services/ad-api.service';
import { CategoryApiService } from 'src/app/services/category-api.service';

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.scss'],
})
export class CreateAdComponent implements OnInit {

  public category$ =  this._categoryApiService.getListCategory();
  
  readonly form = this.fb.group({ 
  adName :['', [Validators.required]],
  description:  ['', /* [Validators.required , */ Validators.maxLength(200) ],
  region: [],
  categoryId: [null, Validators.required ],
  //linkPhoto: [[]],
  price: [
    0,
    [
      Validators.min(1),
      Validators.pattern(/^\d+(,\d{1,2})?$/),
    ],
  ],
  possibleDelivery: [false, Validators.required],
  })
  
    constructor(
       private fb : FormBuilder, 
       private nzMessageService : NzMessageService, 
       private nzNotificationService : NzNotificationService, 
       private _adApi: AdApiService ,
       private _categoryApiService : CategoryApiService) { }
  
    ngOnInit(): void {
    }
  
    onSubmit(){
      if(this.form.invalid){
        this.nzNotificationService.error('Ошибка' , 'Форма заполнена не ');
        Object.values(this.form.controls).forEach(control =>{
          if(control.invalid){
            control.markAsDirty();
            control.updateValueAndValidity({onlySelf: true})
          }
        });
        return;
      }
      
      this._adApi.createAd(this.form.getRawValue()).subscribe(res=>{
        console.log(res);
      })

}}
