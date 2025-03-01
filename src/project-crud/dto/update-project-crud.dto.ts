import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectCrudDto } from './create-project-crud.dto';

export class UpdateProjectCrudDto extends PartialType(CreateProjectCrudDto) {}
