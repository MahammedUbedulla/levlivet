import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preference-surgical',
  templateUrl: './preference-surgical.component.html',
  styleUrls: ['./preference-surgical.component.css']
})
export class PreferenceSurgicalComponent implements OnInit {
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
