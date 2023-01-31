import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Category } from 'src/app/models/category-dto.interface';
import { HomePageComponent } from 'src/app/pages/home-page/home-page.component';
import { AdApiService } from 'src/app/services/ad-api.service';
import { CategoryApiService } from 'src/app/services/category-api.service';

@Component({
  selector: 'app-edit-ad',
  templateUrl: './edit-ad.component.html',
  styleUrls: ['./edit-ad.component.scss'],
})
export class EditAdComponent implements OnInit {
  public category$ =  this._categoryApiService.getListCategory();
  readonly form = this.fb.group({ 
    id: [this.activatedRoute.snapshot.params['id']],
    adName :['', [Validators.required]],
    description:  ['', /* [Validators.required , */ Validators.maxLength(200) ],
    region: [],
    categoryId: ["", Validators.required ],
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
    
  constructor(private fb: FormBuilder, 
    private _categoryApiService: CategoryApiService, 
    private _adService: AdApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private nzNotificationService: NzNotificationService,
    private nzMessageService : NzMessageService
    ) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['id']);
  }

  onSubmit(){
     this._adService.editAd(this.form.getRawValue()).subscribe(res=>{
      console.log(this.activatedRoute.snapshot.params['id']);
      this.router.navigateByUrl('' );
      this.nzNotificationService.success(
        'Успешно!',
        'Объявление отредактировано!'
      );
     })
  }
}
