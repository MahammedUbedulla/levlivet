import { Component, OnInit } from '@angular/core';
import { DischargeQueueService } from '../../@services/discharge-queue.service';
import { DischargeQueue } from '../../@model/dischargeQueue ';
import { HttpClient } from 'selenium-webdriver/http';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { ReportsQueue } from '../../@model/reportsQueue';
import { AppointmentQueue } from '../../@model/appointmentQueue';
import { OrderModule } from 'ngx-order-pipe';
import { CategoryPipe } from './Category.pipe';
import { ChartsModule } from 'ng2-charts';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],

  
})
export class DashBoardComponent implements OnInit {
  dischargeQueueList: DischargeQueue[] = [];
  appointmentQueueList: AppointmentQueue[] = [];
  reportQueueList: ReportsQueue[] = [];
  reverse: boolean = false;
  order: string = 'patientName';
  searchText1:string = '';
  searchText2:string = '';
  searchText3:string = '';
  calendarOptions:Object = {
    height: 'parent',
    fixedWeekCount : false,
    defaultDate: '2018-02-12',
    editable: true,
    eventLimit: true, // allow "more" link when too many events
    events: [
      {
        title: 'All Day Event',
        start: '2018-02-01'
      },
      {
        title: 'Long Event',
        start: '2018-02-07',
        end: '2018-02-10'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2018-02-09T16:00:00'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2018-02-16T16:00:00'
      },
      {
        title: 'Conference',
        start: '2018-02-11',
        end: '2018-02-13'
      },
      {
        title: 'Meeting',
        start: '2018-02-12T10:30:00',
        end: '2018-02-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: '2018-02-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2018-02-12T14:30:00'
      },
      {
        title: 'Happy Hour',
        start: '2018-02-12T17:30:00'
      },
      {
        title: 'Dinner',
        start: '2018-02-12T20:00:00'
      },
      {
        title: 'Birthday Party',
        start: '2018-02-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2018-02-28'
      }
    ]
  };


  constructor(private http: Http)
   {
    
    this.getAppointmentQueueJSON().subscribe(
      (docDetails:any) => {
        this.appointmentQueueList = docDetails.appointmentQueueList;
      },
       err => {
           console.log(err);
       });
    this.getDischargeQueueJSON().subscribe(
      (docDetails:any) => {
        this.dischargeQueueList = docDetails.dischargeQueueList;
      },
       err => {
           console.log(err);
       });

        this.getRecordsQueueJSON().subscribe(
      (docDetails:any) => {
        this.reportQueueList = docDetails.reportQueueList;
      },
       err => {
           console.log(err);
       });
       
   }
   
   public getDischargeQueueJSON(): Observable<DischargeQueue[]> {
    return this.http.get("./assets/Json/dischargeQueue.json")
      .map( (response: Response) => {
        const data = response.json();
        return data; } );
}

   public getAppointmentQueueJSON(): Observable<AppointmentQueue[]> {
    return this.http.get("./assets/Json/appointmentQueue.json")
      .map( (response: Response) => {
        const data = response.json();
        return data; } );
}

public getRecordsQueueJSON(): Observable<ReportsQueue[]> {
  return this.http.get("./assets/Json/reportsQueue.json")
    .map( (response: Response) => {
      const data = response.json();
      return data; } );
}

  ngOnInit() {
    
  }
  sort(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
 
}

clearSearch(value:string) {
if(value=="1")
{this.searchText1=null;}
else if(value=="2"){
  this.searchText2=null;
}else if(value=="3")
{
  this.searchText3=null;
}
 }

}