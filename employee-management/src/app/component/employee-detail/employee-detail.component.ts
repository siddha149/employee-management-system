import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {EmployeeService} from '../../service/employee.service'
import { Employee } from 'src/app/employee';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  id:string;
  employee:Employee;
  constructor(private employeeService: EmployeeService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params=>this.id=params.get('employeeId'));
    this.employeeService.getEmployee(this.id).subscribe(employee=>this.employee=employee);
  }

  deleteEmployee(employeeId:string)
  {
    this.employeeService.deleteEmployee(employeeId).subscribe(()=>this.router.navigate(['']));
  }

}
