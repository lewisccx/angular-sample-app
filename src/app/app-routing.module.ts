import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { HousingComponent } from './housing/housing.component';

const routes: Routes = [
  {

  path:'users',
  component: UsersComponent
}, {
  path:'housing',
  component:HousingComponent
}];

@NgModule({
  declarations: [],
  imports: [
  CommonModule,
  RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
