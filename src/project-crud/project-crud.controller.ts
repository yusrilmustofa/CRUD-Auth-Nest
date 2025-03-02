import { Controller, Get, Post, Body, Patch, Param,Res,Put, Delete, UseGuards } from '@nestjs/common';
import { ProjectCrudService } from './project-crud.service';
import { CreateProjectCrudDto } from './dto/create-project-crud.dto';
import { UpdateProjectCrudDto } from './dto/update-project-crud.dto';
import { AppResponse } from 'src/response.base';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('Project')
export class ProjectCrudController {
  constructor(private readonly ProjectCrudService: ProjectCrudService) { }
@Post()
  async create(@Res() res, @Body() CreateProjectCrudDto: CreateProjectCrudDto) {
    try {
      let data = await this.ProjectCrudService.create(CreateProjectCrudDto)
      return AppResponse.ok(res, data, "Success create Project!")
    } catch (e) {
      return AppResponse.badRequest(res, "", e.message)
    }
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Res() res) {
    try {
      let data = await this.ProjectCrudService.findAll();
      return AppResponse.ok(res, data)
    } catch (e) {
      return AppResponse.badRequest(res, "", e.message)
    }
  }
@Get(':id')
  async findOne(@Res() res, @Param('id') id: string) {
    try {
      let data = await this.ProjectCrudService.findOne(id);
      return AppResponse.ok(res, data,`Success GET ${id} Project!`)
    } catch (e) {
      return AppResponse.badRequest(res, "", e.message)
    }
  }
@Put(':id')
  async update(@Res() res, @Param('id') id: string, @Body() UpdateProjectCrudDto: UpdateProjectCrudDto) {
    try {
      let data = await this.ProjectCrudService.update(id, UpdateProjectCrudDto);
      return AppResponse.ok(res, data, "Todo has been updated!")
    } catch (e) {
      return AppResponse.badRequest(res, "", e.message)
    }
  }
@Delete(':id')
  async remove(@Res() res, @Param('id') id: string) {
    try {
      let data = await this.ProjectCrudService.remove(id);
      return AppResponse.ok(res, data, "Todo has been removed!")
    } catch (e) {
      return AppResponse.badRequest(res, "", e.message)
    }
  }
}
