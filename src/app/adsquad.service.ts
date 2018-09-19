import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdsquadService {
  uri = 'http://localhost:4000';
  
  constructor(public http: HttpClient) { }
  addAdsquad(form, formVals, squadlist){
    const obj = {
      teamseries_name : formVals.teamseries_name,
      teamname : formVals.teamname,
      teamname_mobile : formVals.teamname_mobile,
      squad_list : squadlist
    }
    this.http.post(`${this.uri}/adsquad/ad`, obj)
    .subscribe(res =>
      {
        form.reset();
      });
  }
  
}
