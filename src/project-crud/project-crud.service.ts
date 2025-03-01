import { Injectable } from '@nestjs/common';
import { CreateProjectCrudDto } from './dto/create-project-crud.dto';
import { UpdateProjectCrudDto } from './dto/update-project-crud.dto';
import { Model } from 'mongoose';
import { ProjectCrud } from './entities/project-crud.entity';
import { InjectModel } from '@nestjs/mongoose';
import { ProjectTransformer } from './transformers/project.transformer';

@Injectable()
export class ProjectCrudService {
  constructor(@InjectModel('Project') private ProjectModel: Model<ProjectCrud>) { }
  async create(createProjectCrudDto: CreateProjectCrudDto) {
    let data = new this.ProjectModel(createProjectCrudDto)
    return ProjectTransformer.singleTransform(await data.save())
  }

  async findAll(): Promise<ProjectTransformer> {
    let data = await this.ProjectModel.find()
    if (data.length < 1) {
      return []
    }
    return ProjectTransformer.transform(data)
  }

  async findOne(id: String): Promise<ProjectTransformer> {
    console.log(id)
    let data = await this.ProjectModel.findById(id)
    if (!data) {
      throw new Error('Not Found!')
    }
    return ProjectTransformer.singleTransform(data)
  }

  async update(id: String, updateProjectCrudDto: UpdateProjectCrudDto): Promise<ProjectTransformer> {
    let data = await this.ProjectModel.findByIdAndUpdate(id,updateProjectCrudDto,{new:true})
    if (!data) {
      throw new Error('Not Found!')
    }
    return ProjectTransformer.singleTransform(data)
  }

  async remove(id: String): Promise<ProjectTransformer> {
    let data = await this.ProjectModel.findByIdAndDelete(id)
    if (!data) {
      throw new Error('Not Found!')
    }
    return ProjectTransformer.singleTransform(data)
  }
}
