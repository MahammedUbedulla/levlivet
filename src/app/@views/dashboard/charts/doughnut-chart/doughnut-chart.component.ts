import { Component, OnInit } from '@angular/core';
import {ChartsModule, Color} from 'ng2-charts';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {
 // Doughnut
 public doughnutChartLabels:string[] = ['Patients In  Queue', 'Available Slots', 'Attended Patients'];
 public doughnutChartData:number[] = [350, 450, 100];
 public doughnutChartType:string = 'doughnut';
 colorsUndefined: Array<Color>;
 public chartColors: any[] = [
  { 
    backgroundColor:["#FF6384","#36A2EB", "#5a4989"] 
  }];
  public options: any = {
    legend: {position: 'bottom'},
    };
  constructor() { }

  ngOnInit() {
  }
// events
public chartClicked(e:any):void {
  console.log(e);
}

public chartHovered(e:any):void {
  console.log(e);
}
}
