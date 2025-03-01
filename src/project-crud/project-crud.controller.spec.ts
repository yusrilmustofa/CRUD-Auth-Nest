import { Test, TestingModule } from '@nestjs/testing';
import { ProjectCrudController } from './project-crud.controller';
import { ProjectCrudService } from './project-crud.service';

describe('ProjectCrudController', () => {
  let controller: ProjectCrudController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectCrudController],
      providers: [ProjectCrudService],
    }).compile();

    controller = module.get<ProjectCrudController>(ProjectCrudController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
