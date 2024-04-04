import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Query } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee, EmployeeTier } from './Employee.model';
import { EmployeeSearchDto } from './Employee.Search.dto';
import { EmployeeUpdateDto } from './EmployeeUpdate.dto';

@Controller('employee')
export class EmployeeController {

    constructor(private employeeService: EmployeeService){
        
    }

    @Get()
    getAllEmployees(@Query() Param:EmployeeSearchDto) {
        

        if(Object.keys(Param).length){
            console.log('filtter')
            return this.employeeService.employeeSearch(Param);
        }else{
            console.log('no filter');
            return this.employeeService.getAllEmployees();
        }
        
    }

    @Post()
    createEmployee(@Body('firstName') firstName:string, @Body('lastName') lastName:string, 
    @Body('city') city:string, @Body('mobile') mobile:string, @Body('tier') tier:EmployeeTier) {

        return this.employeeService.createEmployee(firstName, lastName, city, mobile, tier);
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
