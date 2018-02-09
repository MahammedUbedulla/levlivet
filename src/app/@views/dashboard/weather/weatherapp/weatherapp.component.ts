import { Component, OnInit } from '@angular/core';
import { WeatherSettings, TemperatureScale, WeatherLayout } from 'angular-weather-widget';
import { WeatherDetails } from '../../../../@model/weatherDetails';
import { HttpClient } from 'selenium-webdriver/http';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-weatherapp',
  templateUrl: './weatherapp.component.html',
  styleUrls: ['./weatherapp.component.css']
})
export class WeatherappComponent implements OnInit {
  weatherDetails: WeatherDetails = null;
  location: any = {
    "latitude": 136,
    "longitude": 193
  };
  constructor(private http: Http) { 
  }

  

  ngOnInit() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position){
        this.location = position.coords;
        console.log(position.coords); 
        this.getWeatherDetailsJSON().subscribe(
          (docDetails:any) => {
            this.weatherDetails = docDetails;
            console.log(this.weatherDetails);
          },
           err => {
               console.log(err);
           });
      }.bind(this));
   }
  }
  settings: WeatherSettings = {
    location: {
      cityName: 'hyderabad,india'
    },
    backgroundColor: '#347c57',
    color: '#ffffff',
    width: 'auto',
    height: 'auto',
    showWind: false,
    scale: TemperatureScale.CELCIUS,
    showDetails: false,
    showForecast: false,
    layout: WeatherLayout.NARROW,
    language: 'en'
  };
  public getWeatherDetailsJSON(): Observable<WeatherDetails[]> {
    
    return this.http.get("http://api.openweathermap.org/data/2.5//weather?APPID=a004cd0d6e42ac5506b7b639bee82eec&lat="+this.location.latitude+"&lon="+this.location.longitude+"&units=metric")
      .map( (response: Response) => {
        const data = response.json();
        return data; } );
}
}
