
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employee, EmployeeDocument } from '../schemas/Employee.schemas';
import { Model } from 'mongoose';
import { EmployeeCreateDto } from '../dto/EmployeeCreate.dto';



@Injectable()
export class EmployeeRepository {
    constructor(@InjectModel(Employee.name) private employeeModel: Model<EmployeeDocument>) { }

    async create(createEmployeeDto: EmployeeCreateDto): Promise<Employee>{
        console.log(createEmployeeDto);
        const newEmployee = new this.employeeModel(createEmployeeDto);
        return await newEmployee.save();
    }
    async findAll(): Promise<Employee[]> {
        return await this.employeeModel.find().exec();
    }
}