import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { EmployeeService } from './employee.service';
import { EmployeeRepository } from './repository/Employee.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeSchema } from './schemas/Employee.schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Employee', schema: EmployeeSchema }]),],
  controllers: [EmployeeController],
  providers: [EmployeeService, EmployeeRepository]
})
export class EmployeeModule {}
