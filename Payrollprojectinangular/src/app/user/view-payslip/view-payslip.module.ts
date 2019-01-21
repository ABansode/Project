import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewPayslipComponent } from './view-payslip.component';


@NgModule({
  imports: [
    CommonModule,HttpClientModule,BrowserAnimationsModule
  ],
  declarations: [ViewPayslipComponent]
})
export class ViewPayslipModule { }

