import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { TransactionhomeComponent } from './transation/transactionhome/transactionhome.component';
import { TransactiondataComponent } from './transation/transactiondata/transactiondata.component';
import {
  DxDataGridModule,
  DxDataGridComponent,
  DxButtonModule,
} from 'devextreme-angular';
import { TransactiondataService } from './transation/transactiondata/transactiondata.service';
import { DxoExportModule } from 'devextreme-angular/ui/nested';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    TransactionhomeComponent,
    TransactiondataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatChipsModule,
    FormsModule, ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    DxDataGridModule,
    DxButtonModule,
    DxoExportModule,
  ],
  providers: [TransactiondataService],
  bootstrap: [AppComponent, DxDataGridComponent,]
})
export class AppModule { }
