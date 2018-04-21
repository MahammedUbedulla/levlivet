import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preference-labs',
  templateUrl: './preference-labs.component.html',
  styleUrls: ['./preference-labs.component.css']
})
export class PreferenceLabsComponent implements OnInit {
  private 
  facilitys = [
    {labname: 'abc', test:'Blood,Sugar',location:'Madhapur'},
    {labname: 'abc', test:'Blood,Sugar',location:'Madhapur'},
    {labname: 'abc', test:'Blood,Sugar',location:'Madhapur'},
    {labname: 'abc', test:'Blood,Sugar',location:'Madhapur'},
    
  ];
  constructor() { }

  ngOnInit() {
  }

}
