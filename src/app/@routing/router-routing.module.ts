import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }  from '../app.component';
import { PatientManagementComponent } from '../@views/patient-management/patient-management.component';
import { SearchResultsComponent } from '../@views/search-results/search-results.component';
import { DashBoardComponent } from '../@views/dashboard/dashboard.component';
import { VitalsComponent } from '../@views/patient-management/vitals/vitals.component';
import { SyptomsComponent } from '../@views/patient-management/syptoms/syptoms.component';
import { PatienthistoryComponent } from '../@views/patient-management/patienthistory/patienthistory.component';
const routes: Routes = [
  { path: 'search-results', component: SearchResultsComponent },
  { path: 'patient-management', component: PatientManagementComponent },
  { path: 'dash-board', component: DashBoardComponent },
  { path: 'patient-vitals', component: VitalsComponent },
  { path: 'patient-symptoms', component: SyptomsComponent },
  { path: 'patient-history', component: PatienthistoryComponent },
  { path: '**', redirectTo: 'dash-board' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouterRoutingModule { }

//export const routing: RouterRoutingModule = RouterModule.forRoot(routes)