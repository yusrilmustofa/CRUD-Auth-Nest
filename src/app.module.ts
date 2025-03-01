import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectCrudModule } from './project-crud/project-crud.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ProjectCrudModule,
    MongooseModule.forRoot('mongodb://localhost/nest')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
