import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdfixtureService {

  uri = 'http://localhost:4000';

  constructor(public http: HttpClient) { }

  addAdFixture(form, formVals, ist, gmt){
    const obj = {
      date : formVals.date,
      match_id : formVals.match_id,
      match_name : formVals.match_name,
      match_type : formVals.match_type,
      team_a : formVals.team_a,
      team_b : formVals.team_b,
      stadium : formVals.stadium,
      ist: ist,
      gmt: gmt,
      local_time : formVals.local_time
    }
    this.http.post(`${this.uri}/adfixture/add`, obj)
    .subscribe(res => {
      form.reset();
    });
  }
}
