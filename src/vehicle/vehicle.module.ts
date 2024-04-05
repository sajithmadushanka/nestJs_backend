import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { VehicleSchema } from './schemas/Vehicle.schema';
import { VehicleController } from './Vehicle.controller';
import { VehicleService } from './vehicle.service';
import { VehicleRepository } from './repository/VehicleRepository';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Vehicle', schema: VehicleSchema }])],
    controllers: [VehicleController],
    providers: [VehicleService, VehicleRepository],
})
export class VehicleModule {}
