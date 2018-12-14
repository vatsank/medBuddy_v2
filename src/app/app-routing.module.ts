import { HealthCheckComponent } from './health-check/health-check.component';
import { ManageDoctorsComponent } from './manage-doctors/manage-doctors.component';
import { ShowStockComponent } from './show-stock/show-stock.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { TxnHistoryComponent } from './txn-history/txn-history.component';
import { ContentComponent } from './content/content.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchHospitalComponent } from './search-hospital/search-hospital.component';
import { homedir } from 'os';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'home', component:  ContentComponent},
  {path: 'history', component: TxnHistoryComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component:  LogoutComponent},
  {path: 'medicine', component: ShowStockComponent},
  {path: 'hospital' , component: SearchHospitalComponent},
  {path: 'doctors', component: ManageDoctorsComponent},
  {path: 'chekup', component: HealthCheckComponent},
  {path: '**', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
