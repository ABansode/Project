import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [RouterModule,FormsModule,HttpClientModule],
  exports: [RouterModule]
})
export class ViewPayslipRoutingModule { }
