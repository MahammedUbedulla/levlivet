import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-treatment-plan',
  templateUrl: './patient-treatment-plan.component.html',
  styleUrls: ['./patient-treatment-plan.component.css']
})
export class PatientTreatmentPlanComponent implements OnInit {
  private 
  prescriptions = [
    {drug: 'abc', strength:'Blood,Sugar',quantity:'10',dosage:'12',duration:'2 months'},
    {drug: 'abc', strength:'Blood,Sugar',quantity:'10',dosage:'12',duration:'2 months'},
    {drug: 'abc', strength:'Blood,Sugar',quantity:'10',dosage:'12',duration:'2 months'},
    {drug: 'abc', strength:'Blood,Sugar',quantity:'10',dosage:'12',duration:'2 months'},
    {drug: 'abc', strength:'Blood,Sugar',quantity:'10',dosage:'12',duration:'2 months'},
   
    
  ];

  labs = [
    {testname: 'abc', quantity:'10',instruction:'This is the instruction'},
    {testname: 'abc', quantity:'10',instruction:'This is the instruction'},
    {testname: 'abc', quantity:'10',instruction:'This is the instruction'},
    {testname: 'abc', quantity:'10',instruction:'This is the instruction'},
    {testname: 'abc', quantity:'10',instruction:'This is the instruction'}
    
  ];

  imagings = [
    {testname: 'abc', quantity:'10',instruction:'This is the instruction'},
    {testname: 'abc', quantity:'10',instruction:'This is the instruction'},
    {testname: 'abc', quantity:'10',instruction:'This is the instruction'},
    {testname: 'abc', quantity:'10',instruction:'This is the instruction'},
    {testname: 'abc', quantity:'10',instruction:'This is the instruction'}
    
  ];

  surgicals = [
    {procedure: 'abc  bbbbbbb', instruction:'This is the instruction '},
    {procedure: 'abc  bbbbbbb', instruction:'This is the instruction'},
    {procedure: 'abc  bbbbbbb', instruction:'This is the instruction'},
    {procedure: 'abc  bbbbbbb', instruction:'This is the instruction'}
  ];

  pharmancy = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  labsSeclection = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
