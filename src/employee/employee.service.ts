import { Injectable } from '@nestjs/common';
import { Employee, EmployeeStatus, EmployeeTier } from './Employee.model';
import {v1 as uuid} from 'uuid';
import { EmployeeSearchDto } from './Employee.Search.dto';
import { EmployeeUpdateDto } from './EmployeeUpdate.dto';

@Injectable()
export class EmployeeService {
    private employee:Employee[] = []

    getAllEmployees(){
        return this.employee;
    }
    createEmployee(
        firstName:string, 
        lastName:string,
        city:string, 
        mobile:string, 
        tier:EmployeeTier,
        ){
        
        const employee = {
            id:uuid(),
            firstName,   // firstName : firstName
            lastName,
            city,
            mobile,
            tier,
            status:EmployeeStatus.ACTIVE,
        }

        this.employee.push(employee);
        return employee;
    }

    employeeSearch(employeeSearchDto:EmployeeSearchDto):Employee[]{
        const {name, status} = employeeSearchDto;
        let employees = this.getAllEmployees();
        if(name){
            employees = employees.filter(employee => employee.firstName.includes(name) || employee.lastName.includes(name));
        }
        if(status){
            employees = employees.filter(employee => employee.status === status);
        }
        return employees;
    }
    getEmployeeById(id:string):Employee{
        return this.employee.find(employee => employee.id === id);
    }

    updateEmployee(employeeUpdateDto:EmployeeUpdateDto):Employee{
        const{id, city} = employeeUpdateDto;
        let employee = this.getEmployeeById(id);
        employee.city = city;
        return employee;
    }

    deleteEmployee(id:string):boolean{
        let employee = this.getAllEmployees();
        this.employee = this.employee.filter(employee => employee.id !== id);
        return (employee.length !== this.employee.length);
    }
    
}
