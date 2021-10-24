import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlluserComponent } from './components/alluser/alluser.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GroupComponent } from './components/group/group.component';
import { OrganizationComponent } from './components/organization/organization.component';

const routes: Routes = [
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'User', component: AlluserComponent
  },
  {
    path: 'Organisation', component: OrganizationComponent
  },
  {
    path: 'Group', component: GroupComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
