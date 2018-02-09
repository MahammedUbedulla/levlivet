import { BrowserModule } from '@angular/platform-browser';
import {NgModule, ModuleWithProviders} from '@angular/core';
import { FormsModule, FormControl, ReactiveFormsModule   } from '@angular/forms';
import {NgClass} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchResultsService } from './@services/search-results.service';


import { AppComponent } from './app.component';
import { SearchResultsComponent } from './@views/search-results/search-results.component';
import { HeaderComponent } from './@views/header/header.component';
import { FooterComponent } from './@views/footer/footer.component';
import { PatientManagementComponent } from './@views/patient-management/patient-management.component';
import { RouterRoutingModule } from './@routing/router-routing.module';
import { FollowUpListComponent } from './@views/patient-management/follow-up-list/follow-up-list.component';
import { FollowUpDetailsComponent } from './@views/patient-management/follow-up-details/follow-up-details.component';
import { DashBoardComponent } from './@views/dashboard/dashboard.component';
import { OrderModule } from 'ngx-order-pipe';
import { CategoryPipe } from './@views/dashboard/Category.pipe';
import { ChartsModule } from 'ng2-charts';
import { DoughnutChartComponent } from './@views/dashboard/charts/doughnut-chart/doughnut-chart.component'
import { AngularWeatherWidgetModule, WeatherApiName } from 'angular-weather-widget';
import { WeatherappComponent } from './@views/dashboard/weather/weatherapp/weatherapp.component';
import { FullcalendarComponent } from './@views/dashboard/fullcalendar/fullcalendar.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchResultsComponent,
    HeaderComponent,
    FooterComponent,
    PatientManagementComponent,
    FollowUpListComponent,
    FollowUpDetailsComponent,
    DashBoardComponent,
    CategoryPipe,
    DoughnutChartComponent,
    WeatherappComponent,
    FullcalendarComponent
  ],
  imports: [
    AngularWeatherWidgetModule.forRoot({
      key: "a004cd0d6e42ac5506b7b639bee82eec",
      name: WeatherApiName.OPEN_WEATHER_MAP,
      baseUrl: 'http://api.openweathermap.org/data/2.5'
    }),
        FormsModule,
        BrowserAnimationsModule,
        HttpModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterRoutingModule,
    OrderModule,
    ChartsModule,
    NgbModule.forRoot()
  ],
  providers: [SearchResultsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
