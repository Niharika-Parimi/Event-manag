import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { Mainpage1Component } from './mainpage1/mainpage1.component';

const routes: Routes = [
  { path: '', redirectTo: '/Login', pathMatch:'full'  },
  { path: 'Login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'mainpage', component: MainpageComponent},
  { path: 'mainpage1', component: Mainpage1Component}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
////////
export class AppRoutingModule { }
