import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApprenticeModule } from './apprentice/apprentice.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ApprenticeModule,
  ],
})
export class AppModule {}
