import { Component, OnInit, Optional } from '@angular/core';
import { FormControl, FormBuilder, Validator, FormGroup } from "@angular/forms";
import { AdsquadService } from '../../adsquad.service';

@Component({
  selector: 'app-createsquad',
  templateUrl: './createsquad.component.html',
  styleUrls: ['./createsquad.component.css']
})
export class CreatesquadComponent implements OnInit {
  addSquadForm: FormGroup;
  teamname;
  teamname_mobile;
  squad_list;
  teamseries_name;  
  isEmptyExists: boolean = false;
constructor(private squadForm : FormBuilder, private AdsquadService: AdsquadService) { }

  ngOnInit() {
    this.addSquadForm = this.squadForm.group({
      teamseries_name: [this.teamseries_name, Optional],
      teamname: [this.teamname, Optional],
      teamname_mobile: [this.teamname_mobile, Optional],
      squad_list: [this.squad_list, Optional],
    });
  }

  addSquad(){
    var formVals,formSquadList,lisVals, arr, isEmptyExists;
    formVals = this.addSquadForm.value;
    lisVals = formVals.squad_list;
    isEmptyExists = this.isEmptyExists;
    arr = Object.values(formVals);

    arr.forEach(function (val) {
      if ((val !=null && val.replace(/\s/g, "") == "") || val == null) {
        isEmptyExists = true;
      }
    })
    if (isEmptyExists) {
     alert("Please fill all fields");
      return;
    }
    if(!lisVals.includes(",")){
      alert("Please include separator ',' in squad list" );
      return;
    }

    formSquadList = lisVals.split(',');
    this.AdsquadService.addAdsquad(this.addSquadForm, formVals,formSquadList);
    
  }

}
