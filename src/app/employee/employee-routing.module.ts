import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmployeesComponent } from './list-employees/list-employees.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';

const appRoutes: Routes = [
  {
    path: 'employees',
    children: [
      { path: '', component: ListEmployeesComponent },
      { path: 'create', component: CreateEmployeeComponent },
      { path: 'edit/:id', component: CreateEmployeeComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }