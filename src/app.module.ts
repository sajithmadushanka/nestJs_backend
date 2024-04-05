import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_CONNECTION } from './app.propeties';

@Module({
  imports: [EmployeeModule,MongooseModule.forRoot(MONGO_CONNECTION)],
 
})
export class AppModule {}
