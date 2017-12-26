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

@NgModule({
  declarations: [
    AppComponent,
    SearchResultsComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
        FormsModule,
        BrowserAnimationsModule,
    HttpModule,
    BrowserModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  providers: [SearchResultsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
