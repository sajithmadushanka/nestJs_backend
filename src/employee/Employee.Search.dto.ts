import { Employee, EmployeeStatus } from './Employee.model';


export interface EmployeeSearchDto {
        status:EmployeeStatus
        name:string   
}