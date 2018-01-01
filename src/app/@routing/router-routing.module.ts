import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }  from '../app.component';
import { PatientManagementComponent } from '../@views/patient-management/patient-management.component';
import { SearchResultsComponent } from '../@views/search-results/search-results.component';
import { DashBoardComponent } from '../@views/dashboard/dashboard.component';



const routes: Routes = [
  { path: 'search-results', component: SearchResultsComponent },
  { path: 'patient-management', component: PatientManagementComponent },
  { path: 'dash-board', component: DashBoardComponent },
  { path: '**', redirectTo: 'dash-board' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouterRoutingModule { }

//export const routing: RouterRoutingModule = RouterModule.forRoot(routes)