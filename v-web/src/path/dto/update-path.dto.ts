import { PartialType } from '@nestjs/mapped-types';
import { CreatePathDto } from './create-path.dto';

export class UpdatePathDto extends PartialType(CreatePathDto) {}
