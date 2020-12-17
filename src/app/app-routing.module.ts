import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { HousingComponent } from './housing/housing.component';
import { LoansComponent } from './loans/loans.component';
import { ListProfileComponent } from './profile/list-profile/list-profile.component';
import { ProductsComponent } from './products/products.component';
import { ClientsComponent } from './clients/clients.component';
import { LeadsGridComponent } from './leads/leads-listing/leads-grid/leads-grid.component';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
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
},
{
  path: 'products/:id',
  component: ProductsComponent
},
{
  path: 'products/:id/order/:oid',
  component: ProductsComponent
},
{
  path: 'clients',
  component: ClientsComponent
},
{
  path:'',
  redirectTo:'leads',
  pathMatch:'full'
},{
  path:'leads',
  component:LeadsGridComponent,

}, {
  path: 'search',
  component: SearchComponent
}, {
  path: '**',
  component:PageNotFoundComponent
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
