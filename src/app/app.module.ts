import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { UsersComponent } from './users/users.component';
//for ngModel
import { FormsModule } from '@angular/forms';
import { LoansComponent } from './loans/loans.component';
import { HousingComponent } from './housing/housing.component';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoansComponent,
    HousingComponent,
  ],
  imports: [
    BrowserModule,
    //AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    ProfileModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [{provide: LocationStrategy,useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
