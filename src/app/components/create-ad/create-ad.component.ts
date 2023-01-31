import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
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
  description:  ['', [ Validators.maxLength(200) ]],
  region: [],
  categoryId: [null, Validators.required ],
  //photos: [[]],
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
       private _categoryApiService : CategoryApiService,
       private msg: NzMessageService,
       private router: Router,) { }
  
    ngOnInit(): void {
    }

  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      this.msg.success(`${info.file.name} file uploaded successfully`);
      (this.form.get('photos') as any).patchValue([
        ...this.form.get('photos')!.value as any,
        info.file.response
      ])
    } else if (info.file.status === 'error') {
      this.msg.error(`${info.file.name} file upload failed.`);
    }
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
        this.router.navigateByUrl('' );
        this.nzNotificationService.success(
          'Успешно!',
          'Объявление создано!'
        );
    });
  }}
