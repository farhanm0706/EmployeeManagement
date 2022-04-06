import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';

import { IntroComponent } from './intro/intro.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SimpleComponent } from './simple/simple.component';
import { UhomeComponent } from './uhome/uhome.component';
import { UserhomeComponent } from './userhome/userhome.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'signup',component:SignupComponent},
  {path:'intro',component:IntroComponent},
  {path:'userhome',component:UserhomeComponent},
  {path:'admin',component:AdminhomeComponent},
  {path:'simple',component:SimpleComponent},
  {path:'uhome',component:UhomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
