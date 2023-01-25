import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './create/create.component';
import { ReadComponent } from './read/read.component';
import {HttpClientModule} from '@angular/common/http';
import { ApiserviceService } from './apiservice.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './users/signup/signup.component';
import { LoginComponent } from './users/login/login.component';
import { TutorialComponent } from './users/tutorial/tutorial.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ReadComponent,
    SignupComponent,
    LoginComponent,
    TutorialComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
