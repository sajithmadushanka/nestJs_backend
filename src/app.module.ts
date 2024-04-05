import { VehicleRepository } from 'src/vehicle/repository/VehicleRepository';
import { Module } from '@nestjs/common';
import { EmployeeModule } from './employee/employee.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_CONNECTION } from './app.propeties';
import { VehicleService } from './vehicle/vehicle.service';
import { VehicleModule } from './vehicle/vehicle.module';

@Module({
  imports: [EmployeeModule,VehicleModule,MongooseModule.forRoot(MONGO_CONNECTION),
    
  ], 
  providers: [],
 
})
export class AppModule {}
