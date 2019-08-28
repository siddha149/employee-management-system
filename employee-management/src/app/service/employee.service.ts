import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { from, Observable } from 'rxjs';
import {Employee} from '../employee';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  

  getEmployees():Observable<Employee[]>
  {
    return this.http.get<Employee[]>('http://localhost:8080/employees').pipe(tap(data => console.log(data)));
  }

  getEmployee(employeeId:string):Observable<Employee>
  {
    return this.http.get<Employee>('http://localhost:8080/employees/'+employeeId).pipe(tap(data => console.log(data)));
  }

  addEmployee(employee:Employee): Observable<Employee>
  {
    return this.http.post<Employee>('http://localhost:8080/employees/',employee,this.httpOptions).pipe(tap(data => console.log(data)));
  }

  updateEmployee(employeeId:string,employee:Employee): Observable<Employee>
  {
    return this.http.post<Employee>('http://localhost:8080/employees/'+employeeId,employee,this.httpOptions).pipe(tap(data => console.log(data)));
  }

  deleteEmployee(employeeId:string): Observable<any>
  {
    return this.http.delete('http://localhost:8080/employees/'+employeeId,this.httpOptions);
  }
}
