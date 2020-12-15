import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
  ],
  imports: [
BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthModule,
    ProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
