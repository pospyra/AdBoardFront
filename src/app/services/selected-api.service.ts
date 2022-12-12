import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SelectedDto } from '../models/slected-dto.interface';

@Injectable({
  providedIn: 'root'
})
export class SelectedApiService {

  constructor(private _http : HttpClient) { }

  getSelectedItem(selectedId : Guid) : Observable<SelectedDto[]>{
    return this._http.get<SelectedDto[]>(`${environment.host}/SelectedAd/GetItem/${selectedId}`);
  }
}
