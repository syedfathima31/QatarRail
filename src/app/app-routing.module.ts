import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent}  from './home/home.component'
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UserLoadPermission } from './core/guards/auth-guard.service';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  }, 
  {
    path: '',
    component: LoginComponent,
    pathMatch:'full'
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    pathMatch:'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate:[UserLoadPermission]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
