import {Component, Input, OnInit, AfterViewInit, AfterContentChecked, AfterViewChecked, ElementRef} from '@angular/core';
import * as $ from 'jquery';
import 'fullcalendar';
import {Options} from "fullcalendar";

@Component({
  selector: 'app-fullcalendar',
  templateUrl: './fullcalendar.component.html',
  styleUrls: ['./fullcalendar.component.css']
})
export class FullcalendarComponent implements OnInit,AfterViewInit,AfterContentChecked,AfterViewChecked{

  @Input() options: Options;
  text: string;
  calendarInitiated: boolean;

  constructor(private element:ElementRef) {
  }

  ngOnInit():void {
    // console.log("ngOnInit");
  }

  ngAfterViewInit(){
    setTimeout(() => {
      $('app-fullcalendar').fullCalendar(this.options);
    }, 100)
  }
  ngAfterContentChecked(){
  }
  ngAfterViewChecked(){
  }

  fullCalendar(...args: any[]) {
    if (!args) {
      return;
    }
    switch (args.length) {
      case 0:
        return;
      case 1:
        return $(this.element.nativeElement).fullCalendar(args[0]);
      case 2:
        return $(this.element.nativeElement).fullCalendar(args[0], args[1]);
      case 3:
        return $(this.element.nativeElement).fullCalendar(args[0], args[1], args[2]);
    }
  }

  updateEvent(event) {
    return $(this.element.nativeElement).fullCalendar('updateEvent', event);
  }

  clientEvents(idOrFilter) {
    return $(this.element.nativeElement).fullCalendar('clientEvents', idOrFilter);
  }
}

