import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';



const routes: Routes = [
    {
        path: '',component: LoginComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes),FormsModule,HttpClientModule
    ],
    exports: [RouterModule]
})
export class LoginRoutingModule {}
