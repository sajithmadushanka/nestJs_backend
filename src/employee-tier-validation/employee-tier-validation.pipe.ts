import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { EmployeeTier } from '../employee/Employee.enum';

@Injectable()
export class EmployeeTierValidationPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (!value.tier) {
      throw new BadRequestException("Tier is required");
    }

    const tierValue = value.tier.toUpperCase(); // Convert input tier to lowercase

    if (!(tierValue in EmployeeTier)) {
      throw new BadRequestException(`${value.tier} is an invalid tier`);
    }

    return value;
  }
}
