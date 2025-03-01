import { Module } from '@nestjs/common';
import { ProjectCrudService } from './project-crud.service';
import { ProjectCrudController } from './project-crud.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Schema } from './schemas/project.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: "Project", schema: Schema }])],
  controllers: [ProjectCrudController],
  providers: [ProjectCrudService],
})
export class ProjectCrudModule { }
