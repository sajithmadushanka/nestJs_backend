import { EmployeeCreateDto } from './EmployeeCreate.dto';
import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee, EmployeeTier } from './Employee.model';
import { EmployeeSearchDto } from './Employee.Search.dto';
import { EmployeeUpdateDto } from './EmployeeUpdate.dto';
import e from 'express';
import { EmployeeTierValidationPipe } from 'src/employee-tier-validation/employee-tier-validation.pipe';

@Controller('employee')
export class EmployeeController {

    constructor(private employeeService: EmployeeService){
        
    }

    @Get()
    @UsePipes(ValidationPipe)
    getAllEmployees(@Query() Param:EmployeeSearchDto) {
        if(Object.keys(Param).length){
            // console.log('filtter')
            return this.employeeService.employeeSearch(Param);
        }else{
            // console.log('no filter');
            return this.employeeService.getAllEmployees();
        }
        
    }

    @Post()
    @UsePipes(ValidationPipe)
    @UsePipes(new EmployeeTierValidationPipe())
    createEmployee(@Body() employeeCreateDto:EmployeeCreateDto, 
    ):Employee{ 

        return this.employeeService.createEmployee(employeeCreateDto);
        }
    


    @Get('/:id')
    getEmployeeById(@Param('id') id:string){
        return this.employeeService.getEmployeeById(id);
    }

    @Post('/:id/city')
    updateEmployee(@Param('id') id:string, @Body() employeeUpdateDto:EmployeeUpdateDto):Employee{
        employeeUpdateDto.id = id;
        return this.employeeService.updateEmployee(employeeUpdateDto);
    }

    @Delete('/:id')
    @HttpCode(204)
    deleteEmployee(@Param('id') id:string){
        if(this.employeeService.deleteEmployee(id)){
            return 'Employee Deleted';
        }else{
            throw new NotFoundException('Employee not found');
        }
       
    }
}
