import { Module } from '@nestjs/common';
import { LearnerController } from './learner/learner.controller';
import { LearnerService } from './learner/learner.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Learner } from './learner/learner.entity';
import { SchoolingController } from './schooling/schooling.controller';
import { SchoolingService } from './schooling/schooling.service';
import { Schooling } from './schooling/schooling.entity';
import { HostelEntryService } from './hostel-entry/hostel-entry.service';
import { HostelEntryController } from './hostel-entry/hostel-entry.controller';
import { HostelEntry } from './hostel-entry/hostel-entry.entity';
import { WritingLevelController } from './writing-level/writing-level.controller';
import { WritingLevelService } from './writing-level/writing-level.service';
import { SubstanceService } from './substance/substance.service';
import { SubstanceController } from './substance/substance.controller';
import { WritingLevel } from './writing-level/writing-level.entity';
import { Substance } from './substance/substance.entity';
import { LearnerWritingLevel } from './writing-level/learner-writing-level.entity';
import { LearnerSubstance } from './substance/learner-substance.entity';

@Module({
    imports: [TypeOrmModule.forFeature([
        Learner,
        Schooling,
        HostelEntry,
        WritingLevel,
        LearnerWritingLevel,
        Substance,
        LearnerSubstance,
    ])],
    providers: [
        LearnerService,
        SchoolingService,
        HostelEntryService,
        WritingLevelService,
        SubstanceService,
    ],
    controllers: [
        LearnerController,
        SchoolingController,
        HostelEntryController,
        WritingLevelController,
        SubstanceController,
    ],
})
export class ApprenticeModule {}
