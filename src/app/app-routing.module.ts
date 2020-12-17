import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { HousingComponent } from './housing/housing.component';
import { LoansComponent } from './loans/loans.component';
import { ListProfileComponent } from './profile/list-profile/list-profile.component';

const routes: Routes = [
  {
    //only one component can be shown
  path:'users',
  component: UsersComponent,
  children:[{
    path:'loans',
    component: LoansComponent
  },]
}, {
  path:'housing',
 // component:HousingComponent,
  redirectTo: 'profile-list'
}, 
{
  path:'profile-list',
  component:ListProfileComponent
}
];

@NgModule({
  declarations: [],
  imports: [
CommonModule,
  RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
