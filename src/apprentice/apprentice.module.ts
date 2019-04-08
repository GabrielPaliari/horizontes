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

@Module({
    imports: [TypeOrmModule.forFeature([Learner, Schooling, HostelEntry])],
    providers: [
        LearnerService,
        SchoolingService,
        HostelEntryService,
    ],
    controllers: [
        LearnerController,
        SchoolingController,
        HostelEntryController,
    ],
})
export class ApprenticeModule {}
