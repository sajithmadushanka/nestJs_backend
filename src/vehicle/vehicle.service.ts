
import { Injectable } from '@nestjs/common';
import { VehicleCreateDto } from 'src/vehicle/dto/VehicleCreate.dto';
import { VehicleRepository } from 'src/vehicle/repository/VehicleRepository';

@Injectable()
export class VehicleService {

    constructor(private vehicleRepository: VehicleRepository) { }

    createVehicle(vehicleCreateDto: VehicleCreateDto) {
        return this.vehicleRepository.create(vehicleCreateDto);
    }
    getAllVehicle() {
        return this.vehicleRepository.findAll();
    }
}
