import { NgModule } from '@angular/core';
import { RolComponent } from './rol/rol.component';
import { LogInComponent } from './log-in/log-in.component';
import { RouterModule,Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { EmployeeComponent } from './employee/employee.component';


const routes: Routes = [
{path: 'log-in', component:LogInComponent},
{path: 'rol', component:RolComponent},
{path: 'department', component:DepartmentComponent},
{path: 'employee', component:EmployeeComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports :[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
