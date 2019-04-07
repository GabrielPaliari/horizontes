import { Module } from '@nestjs/common';
import { LearnerController } from './learner/learner.controller';
import { LearnerService } from './learner/learner.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Learner } from './learner/learner.entity';
import { SchoolingController } from './schooling/schooling.controller';
import { SchoolingService } from './schooling/schooling.service';
import { Schooling } from './schooling/schooling.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Learner, Schooling])],
    providers: [
        LearnerService,
        SchoolingService,
    ],
    controllers: [
        LearnerController,
        SchoolingController,
    ],
})
export class ApprenticeModule {}
