import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preference-imaging',
  templateUrl: './preference-imaging.component.html',
  styleUrls: ['./preference-imaging.component.css']
})
export class PreferenceImagingComponent implements OnInit {
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
