import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { NewAdminComponent } from './new-admin/new-admin.component';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AllTypeReportGenerationComponent } from './all-type-report-generation/all-type-report-generation.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { SuccessComponent } from './success/success.component';
import { SalarySlipStructureComponent } from './salary-slip-structure/salary-slip-structure.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatSortModule, MatFormFieldModule } from '@angular/material';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { ChartsModule } from 'ng2-charts/ng2-charts';
const routes=[
              {path:'admin/:firstname',component:AdminComponent},              
              {path:'all-type-report-generation',component:AllTypeReportGenerationComponent},
           
              {path:'employee-registration',component:EmployeeRegistrationComponent},
              {path:'newadmin',component:NewAdminComponent},
            
              {path:'success',component:SuccessComponent},
              {path:'salaryslip',component:SalarySlipStructureComponent},
             ]

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    ChartsModule
  ],
  declarations: [
    AdminComponent,
    NewAdminComponent,
    AllTypeReportGenerationComponent,
    EmployeeRegistrationComponent,
    SuccessComponent,
    SalarySlipStructureComponent,
    AdminProfileComponent,
    EmployeeDetailsComponent,
    
  ]
})
export class AdminModule { }
platformBrowserDynamic().bootstrapModule(AdminModule);