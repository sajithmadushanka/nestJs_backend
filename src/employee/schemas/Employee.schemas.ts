
import { Prop, Schema } from "@nestjs/mongoose";
import { EmployeeStatus, EmployeeTier } from "../Employee.enum";

export class EmployeeSchema{
    id:string;
    firstName:string;
    lastName:string;
    city:string;
    mobile:string;
    tier:EmployeeTier;
    status:EmployeeStatus;

}
export type EmployeeDocument = Employee & Document;
@Schema()
export class Employee{
    @Prop()
    id:string;
    @Prop({required:true})
    firstName:string;
    @Prop()
    lastName:string;
    @Prop()
    city:string;
    @Prop()
    mobile:string;
    @Prop()
    tier:EmployeeTier;
    @Prop()
    status:EmployeeStatus;
}
