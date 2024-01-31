import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { TransactionhomeComponent } from './transation/transactionhome/transactionhome.component';
import { TransactiondataComponent } from './transation/transactiondata/transactiondata.component';

const routes: Routes = [
  {path:'',
  component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:RegisterComponent
  },
  {
    path:'transaction-home',
    component:TransactionhomeComponent
  },
  {
    path:'transaction-table',
    component:TransactiondataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
