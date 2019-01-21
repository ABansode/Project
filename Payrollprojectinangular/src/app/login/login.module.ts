import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
    imports: [CommonModule,
        LoginRoutingModule,
        FormsModule,
        BrowserAnimationsModule,
        HttpClientModule],
    declarations: [LoginComponent]
})
export class LoginModule {}
