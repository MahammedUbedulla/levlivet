import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preference-facility',
  templateUrl: './preference-facility.component.html',
  styleUrls: ['./preference-facility.component.css']
})
export class PreferenceFacilityComponent implements OnInit {
  private fieldArray: Array<any> = [];
  private newAttribute: any = {};
  private 
  hours = [
    {value: '1',},
    {value: '2', },
    {value: '3'},
    {value: '4',},
    {value: '5', },
    {value: '6'},
    {value: '7',},
    {value: '8', },
    {value: '9'},
    {value: '10',},
    {value: '11', },
    {value: '12'},
  ];
  addFieldValue() {
      this.fieldArray.push(this.newAttribute)
      this.newAttribute = {};
  }

  deleteFieldValue(index) {
      this.fieldArray.splice(index, 1);
  }
  constructor() { }

  ngOnInit() {
  }

}
