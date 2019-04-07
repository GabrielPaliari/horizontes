import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LearnerModule } from './learner/learner.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    LearnerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
