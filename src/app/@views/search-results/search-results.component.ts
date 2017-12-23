import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as $ from 'jquery';
import { Observable } from 'rxjs';
import { SearchResultsService } from '../../@services/search-results.service';
import { Doctor } from '../../@model/doctorsList';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  doctorList: Doctor[];
  constructor(
    private searchResultsService: SearchResultsService
    ){}
  loadDetails(){
     this.searchResultsService.getDetails()
                       .subscribe(
                           docDetails => this.doctorList = docDetails,
                            err => {
                                console.log(err);
                            });
}

ngOnInit(){
        // Load comments
        this.loadDetails()
}

}
