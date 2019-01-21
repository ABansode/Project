import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChildren } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { EmployeeComponent } from './employee/employee.component';
import { ClientComponent } from './client/client.component';
import { InvalidLoginComponent } from './invalid-login/invalid-login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminModule } from './admin/admin.module';
import { ClientonbordingComponent } from './employee/clientonbording/clientonbording.component';
import { ClientregistrationComponent } from './employee/clientregistration/clientregistration.component';
import { EmployeeProfileComponent } from './employee/employee-profile/employee-profile.component';
import { GenratesalaryComponent } from './employee/genratesalary/genratesalary.component';
import { PayrollprocessingComponent } from './employee/payrollprocessing/payrollprocessing.component';
import { UserregistrationComponent } from './employee/userregistration/userregistration.component';

import { ProfileComponent } from './client/profile/profile.component';
import { ReportsGenerationComponent } from './client/reports-generation/reports-generation.component';
import { TaxDeclarationInfoComponent } from './client/tax-declaration-info/tax-declaration-info.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';
import { FeedbackComponent } from './user/feedback/feedback.component';
import { InvestmentDeclarationComponent } from './user/investment-declaration/investment-declaration.component';
import { NotificationComponent } from './user/notification/notification.component';
import { PersonalDetailsComponent } from './user/personal-details/personal-details.component';
import { ViewFormSystemComponent } from './user/view-form-system/view-form-system.component';
import { ViewIncomeTaxReportComponent } from './user/view-income-tax-report/view-income-tax-report.component';
import { ViewPayslipComponent } from './user/view-payslip/view-payslip.component';
import { LeaveManagmentComponent } from './client/leave-managment/leave-managment.component';


const routes=[{path:'',component:HomepageComponent},
              {path:'home',component:HomepageComponent},
              {path:'login',component:LoginComponent},
              {path:'employee/:uname',component:EmployeeComponent},
              {path:'user/:lid',component:UserComponent},
              {path:'client/:lid',component:ClientComponent},
              {path:'**',component:PageNotFoundComponent}
             ]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    UserComponent,
    EmployeeComponent,
    ClientComponent,
    InvalidLoginComponent,
    PageNotFoundComponent,ClientonbordingComponent,
    ClientregistrationComponent,
    EmployeeProfileComponent,
    GenratesalaryComponent,
    PayrollprocessingComponent,
    UserregistrationComponent,LeaveManagmentComponent,
    ProfileComponent,ReportsGenerationComponent,
    TaxDeclarationInfoComponent,ChangePasswordComponent,
    FeedbackComponent,InvestmentDeclarationComponent,
    NotificationComponent,PersonalDetailsComponent,
    ViewFormSystemComponent,ViewIncomeTaxReportComponent,
    ViewPayslipComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    FormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AdminModule,FormsModule,ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }