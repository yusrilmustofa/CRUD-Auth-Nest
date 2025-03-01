import { Test, TestingModule } from '@nestjs/testing';
import { ProjectCrudService } from './project-crud.service';

describe('ProjectCrudService', () => {
  let service: ProjectCrudService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectCrudService],
    }).compile();

    service = module.get<ProjectCrudService>(ProjectCrudService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
