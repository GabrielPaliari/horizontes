import { Module } from '@nestjs/common';
import { LearnerController } from './learner.controller';
import { LearnerService } from './learner.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Learner } from './learner.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Learner])],
    providers: [LearnerService],
    controllers: [LearnerController],
})
export class LearnerModule {}
