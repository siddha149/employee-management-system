import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {EmployeeService} from '../../service/employee.service'
import { Employee } from 'src/app/employee';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id:string;
  employee:Employee;
  updateEmployeeForm;

  constructor(private employeeService: EmployeeService,private route: ActivatedRoute,private formBuilder: FormBuilder,private router: Router,) {
    this.updateEmployeeForm = this.formBuilder.group({
      employeeId:'',
      name:'',
      designation:'',
      salary: ''
    });
   }

  ngOnInit() {

    this.route.paramMap.subscribe(params=>this.id=params.get('employeeId'));
    this.employeeService.getEmployee(this.id).subscribe(employee=>{
      this.employee=employee;
      this.updateEmployeeForm = this.formBuilder.group({
        employeeId:this.employee.employeeId,
        name:this.employee.name,
        designation:this.employee.designation,
        salary: this.employee.salary
      });
    });
  }

  onSubmit(employeeData)
  {
    this.employeeService.updateEmployee(this.id,employeeData).subscribe(()=>this.router.navigate(['employees/',this.id]));
  }
}
