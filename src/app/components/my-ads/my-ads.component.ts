import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-my-ads',
  templateUrl: './my-ads.component.html',
  styleUrls: ['./my-ads.component.scss']
})
export class MyAdsComponent implements OnInit {

  readonly formSearch = this.fb.group({ 
    categoryId: [ ]
  })

  constructor(private fb : FormBuilder, ) { }

  ngOnInit(): void {
  }

}
