import { Component, OnInit } from '@angular/core';
import { WeatherSettings, TemperatureScale, WeatherLayout } from 'angular-weather-widget';
import { WeatherDetails } from '../../../../@model/weatherDetails';
import { HttpClient } from 'selenium-webdriver/http';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { error } from 'selenium-webdriver';
@Component({
  selector: 'app-weatherapp',
  templateUrl: './weatherapp.component.html',
  styleUrls: ['./weatherapp.component.css']
})
export class WeatherappComponent implements OnInit {
  weatherDetails: WeatherDetails = null;
  location: any = {
    "latitude": 17.3850,
    "longitude": 78.4867
  };
  constructor(private http: Http) { 
  }

  ngOnInit() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position){
        this.location = position.coords;
        this.getWeatherDetailsJSON().subscribe(
          (docDetails:any) => {
            this.weatherDetails = docDetails;
          },
           err => {
               console.log(err);
           });
      }.bind(this), err => {
        // Setting location to Hyderabad if user blocks location.
        this.location = {
          "latitude" : 17.3850, 
          "longitude": 78.4867
        }
        this.getWeatherDetailsJSON().subscribe(
          (docDetails:any) => {
            this.weatherDetails = docDetails;
          },
           err => {
               console.log(err);
           });
      });
   }
  }
  settings: WeatherSettings = {
    location: {
      cityName: 'Hyderabad, India'
    },
    backgroundColor: '#347c57',
    color: '#ffffff',
    width: 'auto',
    height: 'auto',
    showWind: true,
    scale: TemperatureScale.CELCIUS,
    showDetails: false,
    showForecast: true,
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
