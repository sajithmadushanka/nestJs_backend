
import { Body, Controller, Get, Post } from "@nestjs/common";
import { VehicleService } from "src/vehicle/vehicle.service";
import { Vehicle } from "./schemas/Vehicle.schema";
import { VehicleCreateDto } from "./dto/VehicleCreate.dto";

@Controller('vehicle')
export class VehicleController{
    constructor(private VehicleService:VehicleService){}

    @Post()
    async createVehicle(@Body() vehicleCreateDto:VehicleCreateDto):Promise<Vehicle>{
        return this.VehicleService.createVehicle(vehicleCreateDto);
    }
    @Get()
    async findAll():Promise<Vehicle[]>{
        return this.VehicleService.getAllVehicle();
    }
}