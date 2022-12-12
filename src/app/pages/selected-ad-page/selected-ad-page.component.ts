import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { SelectedDto } from 'src/app/models/slected-dto.interface';
import { SelectedApiService } from 'src/app/services/selected-api.service';

@Component({
  selector: 'app-selected-ad-page',
  templateUrl: './selected-ad-page.component.html',
  styleUrls: ['./selected-ad-page.component.scss']
})
export class SelectedAdPageComponent implements OnInit {

  selectedAd : SelectedDto[];

  constructor(private _selectedItem : SelectedApiService ) { }

   getSelected(selectedId:Guid){

    return this._selectedItem.getSelectedItem(selectedId)
    .subscribe(response =>{
      console.log(response);
      this.selectedAd = response;
    })
  } 

  ngOnInit(): void {
    }
  }
