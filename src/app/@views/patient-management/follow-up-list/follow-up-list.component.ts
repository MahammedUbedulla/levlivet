import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-follow-up-list',
  templateUrl: './follow-up-list.component.html',
  styleUrls: ['./follow-up-list.component.css']
})
export class FollowUpListComponent implements OnInit {
  title: string;
  clickedItem: Number;
  patientManagementList: [string];
  onClickListItem: Function;
  constructor() {
    this.title = "Fallow-up"
    //this.patientManagementList = ["Demographics", "Symptoms", "Vitals", "Allergies", "Medications History","Family History","Social History","Past Medical History","Treatment Plan","Review","Order and Results","checkout"];
    this.onClickListItem = function (index) {
     this.clickedItem = index;
    }
  }

  ngOnInit() {
  }

}
