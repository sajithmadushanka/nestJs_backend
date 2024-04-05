import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Employee } from "../../employee/schemas/Employee.schemas"
import mongoose from "mongoose"




export type VehicleDocument = Vehicle & Document;

@Schema()
export class Vehicle {
    @Prop()
    id:string
    @Prop()
    make:string
    @Prop()
    model:string
    @Prop()
    year:number
    @Prop({type:mongoose.Schema.Types.ObjectId, ref:'Employee'})
    employeeId:Employee
}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle)