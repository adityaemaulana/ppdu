import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEPjpk } from './model/pjpk';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private _pjpkUrl : string = "/assets/data/pjpk.json";

  constructor(private http: HttpClient) { }

  getPjpkData(): Observable<IEPjpk[]> {
    return this.http.get<IEPjpk[]>(this._pjpkUrl);
  }
}
