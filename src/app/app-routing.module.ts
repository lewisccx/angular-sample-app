import { NgModule } from '@angular/core';
import { Routes, RouterModule, OutletContext } from '@angular/router';
import { HousingComponent } from './housing/housing.component';
import { LoansComponent } from './loans/loans.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  //access in url localhost:4200/(loans-outlet:loans)
  {
    path: 'loans',
    component: LoansComponent,
    outlet: 'loans-outlet'
  },
  {
    path: 'users',
    component: UsersComponent,
    outlet: 'users-outlet'
  },
  {
    path: 'user-housing',
    component: HousingComponent,
    outlet:'users-outlet'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
