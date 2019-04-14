import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApprenticeModule } from './apprentice/apprentice.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ApprenticeModule,
  ]
})
export class AppModule {}
