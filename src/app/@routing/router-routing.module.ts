import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }  from '../app.component';
import { PatientManagementComponent } from '../@views/patient-management/patient-management.component';
import { SearchResultsComponent } from '../@views/search-results/search-results.component';
import { DashBoardComponent } from '../@views/dashboard/dashboard.component';
import { VitalsComponent } from '../@views/patient-management/vitals/vitals.component';
import { SyptomsComponent } from '../@views/patient-management/syptoms/syptoms.component';
import { PatienthistoryComponent } from '../@views/patient-management/patienthistory/patienthistory.component';
import { AptrytDashboardComponent } from '../@views/aptryt-dashboard/aptryt-dashboard.component';
import { PatientTreatmentPlanComponent } from '../@views/patient-management/patient-treatment-plan/patient-treatment-plan.component';
import { PreferenceDashboardComponent } from '../@views/preference-dashboard/preference-dashboard.component';
import { PreferenceLabsComponent } from '../@views/preference-dashboard/preference-labs/preference-labs.component';
import { PreferenceFacilityComponent } from '../@views/preference-dashboard/preference-facility/preference-facility.component';
import { PreferenceImagingComponent } from '../@views/preference-dashboard/preference-imaging/preference-imaging.component';
import { PreferenceSurgicalComponent } from '../@views/preference-dashboard/preference-surgical/preference-surgical.component';

const routes: Routes = [
  { path: 'search-results', component: SearchResultsComponent },
  { path: 'patient-management', component: PatientManagementComponent },
  { path: 'dash-board', component: DashBoardComponent },
  { path: 'patient-vitals', component: VitalsComponent },
  { path: 'patient-symptoms', component: SyptomsComponent },
  { path: 'patient-history', component: PatienthistoryComponent },
  { path: 'aptryt-dashboard', component: AptrytDashboardComponent },
  { path: 'preference-dashboard', component: PreferenceDashboardComponent },
  { path: 'preference-labs', component: PreferenceLabsComponent },
  { path: 'preference-facility', component: PreferenceFacilityComponent },
  { path: 'preference-imaging', component: PreferenceImagingComponent },
  { path: 'preference-surgical', component: PreferenceSurgicalComponent },
  {path:'patient-treatment-plan',component:PatientTreatmentPlanComponent},
 
  { path: '**', redirectTo: 'dash-board' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouterRoutingModule { }

//export const routing: RouterRoutingModule = RouterModule.forRoot(routes)