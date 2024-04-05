import { EmployeeRepository } from './repository/Employee.repository';
import { EmployeeCreateDto } from './dto/EmployeeCreate.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { EmployeeStatus } from './Employee.enum';
import {v1 as uuid} from 'uuid';
import { EmployeeSearchDto } from './dto/Employee.Search.dto';
import { EmployeeUpdateDto } from './dto/EmployeeUpdate.dto';
import { Employee } from './schemas/Employee.schemas';


@Injectable()
export class EmployeeService {
    
    constructor(private employeeRepositary:EmployeeRepository){}

   async getAllEmployees():Promise<Employee[]>{
        return await this.employeeRepositary.findAll();
    }
   async createEmployee(EmployeeCreateDto:EmployeeCreateDto):Promise<Employee>{
        
        return await this.employeeRepositary.create(EmployeeCreateDto);
        
      
    }

    // employeeSearch(employeeSearchDto:EmployeeSearchDto):Employee[]{
    //     const {name, status} = employeeSearchDto;
    //     let employees = this.getAllEmployees();
    //     if(name){
    //         employees = employees.filter(employee => employee.firstName.includes(name) || employee.lastName.includes(name));
    //     }
    //     if(status){
    //         employees = employees.filter(employee => employee.status === status);
    //     }
    //     return employees;
    // }
    // getEmployeeById(id:string):Employee{
    //     const employees = this.getAllEmployees();
    //     let employee =  employees.find(employee => employee.id === id);
    //     if(!employee){
    //         throw new NotFoundException(`${id} not found`);
    //     }
    //     return employee;
    // }

    // updateEmployee(employeeUpdateDto:EmployeeUpdateDto):Employee{
    //     const{id, city} = employeeUpdateDto;
    //     let employee = this.getEmployeeById(id);
    //     employee.city = city;
    //     return employee;
    // }

    // deleteEmployee(id:string):boolean{
    //     let employee = this.getAllEmployees();
    //     this.employee = this.employee.filter(employee => employee.id !== id);
    //     return (employee.length !== this.employee.length);
    // }
    
}
