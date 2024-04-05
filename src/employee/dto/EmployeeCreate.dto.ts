import { IsNotEmpty, Matches, NotEquals } from "class-validator";
import { EmployeeTier } from "../Employee.enum";

export class EmployeeCreateDto{

    @IsNotEmpty()
    @Matches(/^(?!\s*$).+/, { message: "First name must contain at least one non-whitespace character" })
    firstName:string;
    @NotEquals('CEO')
    lastName:string;
    city:string;
    mobile:string;
    tier:EmployeeTier;  
}