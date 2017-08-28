import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { enableProdMode } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent} from './login.component';
import { RegisterComponent } from './register.component';
import {EmployeeComponent} from './employee.component';
import { AlertModule } from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
import { routing } from './app.routing';
import { AuthGuard } from './default';
import {EmployeeService} from './_Services/employee.Service';
import {StorageService} from './_Services/storage.Service';
import { HttpModule } from '@angular/http';
import {AgGridModule} from "ag-grid-angular/main";
import {GridComponent} from './grid.componet';
import { EmpChildComponent } from './employeeChild.component';
import { DayEntryComponent } from './dayentry.component';

enableProdMode();

@NgModule({
  declarations: [
    AppComponent,RegisterComponent,LoginComponent,EmployeeComponent,GridComponent
    ,EmpChildComponent,DayEntryComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpModule,routing,AlertModule.forRoot()
    // AgGridModule.withComponents(
    //         [GridComponent]
    //     )
  ],
  providers: [AuthGuard,EmployeeService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {
   
 }
