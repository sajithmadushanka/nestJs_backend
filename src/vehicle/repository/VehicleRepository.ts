import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vehicle, VehicleDocument } from '../schemas/Vehicle.schema';
import { VehicleCreateDto } from '../dto/VehicleCreate.dto';


@Injectable()
export class VehicleRepository {
  constructor(@InjectModel(Vehicle.name) private vehicleModel: Model<VehicleDocument>) {}

  async create(vehicleCreateDto: VehicleCreateDto): Promise<Vehicle> {
    console.log(vehicleCreateDto);
    const createdVehicle = new this.vehicleModel(vehicleCreateDto);
    
    return createdVehicle.save();
  }

  async findAll(): Promise<Vehicle[]> {
    return this.vehicleModel.find().exec();
  }
}
