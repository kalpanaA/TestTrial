import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {LoginComponent} from './login.component';
import {EmployeeComponent} from './employee.component';
import { RegisterComponent } from './register.component';
import { EmpChildComponent } from './employeeChild.component';
import { DayEntryComponent } from './dayentry.component';
import { AuthGuard } from './default';

const appRoutes: Routes = [ 
  { path: '', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'Register', component: RegisterComponent },
  { path: 'Login',  component: LoginComponent },
  { path: 'Employee',  component: EmployeeComponent },
  { path: 'Employee',  component: EmployeeComponent },
  { path: 'DayEntry',  component: DayEntryComponent }
]; 

export const routing = RouterModule.forRoot(appRoutes);