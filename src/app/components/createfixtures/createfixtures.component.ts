import { Component, OnInit, Optional } from '@angular/core';
import { FormControl, FormBuilder, Validator, FormGroup } from "@angular/forms";
import { AdfixtureService } from '../../adfixture.service';
import { getLocaleTimeFormat } from '@angular/common';

@Component({
  selector: 'app-createfixtures',
  templateUrl: './createfixtures.component.html',
  styleUrls: ['./createfixtures.component.css']
})
export class CreatefixturesComponent implements OnInit {
  addFixtureForm: FormGroup;
  date;
  match_id;
  match_name;
  team_a;
  team_b;
  match_type;
  stadium;
  local_time;
  isEmptyExists: boolean = false;
  constructor(private fixtureForm: FormBuilder, private fixtureService: AdfixtureService) { }

  ngOnInit() {
    this.addFixtureForm = this.fixtureForm.group({
      date: [this.date, Optional],
      match_id: [this.match_id, Optional],
      match_name: [this.match_name, Optional],
      team_a: [this.team_a, Optional],
      team_b: [this.team_b, Optional],
      match_type: [this.match_type, Optional],
      stadium: [this.stadium, Optional],
      local_time: [this.local_time, Optional]
    });
  }

  addFixture() {
    var arr, isEmptyExists = this.isEmptyExists;
    var formVals = this.addFixtureForm.value;
    var ist, gmt, dt, currentOffset,mid_1,mid_2,
      GMTTime, ISTOffset, ISTTime;

    dt = new Date(formVals.date);
    currentOffset = dt.getTimezoneOffset()
    ISTOffset = 330;

    ISTTime = new Date(dt.getTime() + (ISTOffset + currentOffset) * 60000);
    mid_1 = getTimeAMPM(ISTTime.getHours());
    ist = ISTTime.getHours() +'.'+ ISTTime.getMinutes() + '' + mid_1;

    GMTTime = dt.toGMTString();
    mid_2 = getTimeAMPM(dt.getHours());
    gmt = dt.getUTCHours() +'.'+ dt.getUTCMinutes() + '' + mid_2;

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
    this.fixtureService.addAdFixture( this.addFixtureForm, formVals, ist, gmt);
  }
}

function getTimeAMPM(hours) {
  hours = (hours + 24 - 2) % 24;
  var mid = 'AM';
  if (hours == 0) { //At 00 hours we need to show 12 am
    hours = 12;
  }
  else if (hours > 12) {
    hours = hours % 12;
    mid = 'PM';
  }
  return mid;
}