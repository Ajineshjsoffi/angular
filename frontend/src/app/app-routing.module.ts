import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { SignupComponent } from './users/signup/signup.component';
import { TutorialComponent } from './users/tutorial/tutorial.component';


const routes: Routes = [
  {path:'create',component:CreateComponent},
  {path:'create/:id',component:CreateComponent},
  
  {path:'read',component:ReadComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'tutorial',component:TutorialComponent}
  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
