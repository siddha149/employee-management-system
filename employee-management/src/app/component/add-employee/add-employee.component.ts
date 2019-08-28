import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import {EmployeeService} from '../../service/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  addEmployeeForm;

  constructor(private formBuilder: FormBuilder,private router: Router,private employeeService: EmployeeService) { 
    this.addEmployeeForm = this.formBuilder.group({
      employeeId:'',
      name:'',
      designation:'',
      salary: ''
    });
  }

  ngOnInit() {
  }

  onSubmit(employeeData)
  {
    this.employeeService.addEmployee(employeeData).subscribe(()=>this.router.navigate(['']));
  }

}
