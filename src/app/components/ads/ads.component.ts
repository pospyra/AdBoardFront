import { Component, Input, OnInit } from '@angular/core';
import { AdDto} from 'src/app/models/ad-dto.interface' ;
import { CategoryDto } from 'src/app/models/category-dto.interface';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {
@Input() ad: AdDto;
  constructor() { }

  ngOnInit(): void {
  }

}
