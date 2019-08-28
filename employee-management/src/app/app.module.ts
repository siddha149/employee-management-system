import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {EmployeeService} from './service/employee.service';
import { EmployeeComponent } from './component/employee/employee.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailComponent } from './component/employee-detail/employee-detail.component';
import { AddEmployeeComponent } from './component/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './component/update-employee/update-employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';

const appRoutes: Routes = [
  {
    path: '',
    component: EmployeeComponent
  },
  {
    path: 'employees/:employeeId',
    component: EmployeeDetailComponent
  },
  {
    path:'employees-add',
    component: AddEmployeeComponent
  },
  {
    path:'employees-update/:employeeId',
    component: UpdateEmployeeComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeDetailComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatCardModule,
    MatTableModule,
  ],
  providers: [
    EmployeeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
