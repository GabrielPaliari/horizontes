import { Injectable } from '@nestjs/common';
import { Learner } from './learner.entity';
import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateLearnerDto, UpdateLearnerDto } from './learner.dto';
import * as moment from 'moment';
import { Schooling } from '../schooling/schooling.entity';
import { SchoolingService } from '../schooling/schooling.service';

@Injectable()
export class LearnerService {
  constructor(
    @InjectRepository(Learner)
    private readonly learnerRepository: Repository<Learner>,
    private readonly schoolingService: SchoolingService,
  ) {}

  async create(createLearnerDto: CreateLearnerDto): Promise<Learner> {
    let learner = await this.appendSchooling(createLearnerDto);
    learner = new Learner(learner as CreateLearnerDto);
    return await this.learnerRepository.save(learner);
  }

  async findAll(): Promise<Learner[]> {
    return await this.learnerRepository.find({ relations: ['schooling']});
  }

  async findOne(id: number): Promise<Learner> {
    return await this.learnerRepository.findOne(id, { relations: ['schooling']});
  }

  async update(updateLearnerDto: UpdateLearnerDto): Promise<UpdateResult> {
    let learner = updateLearnerDto;
    if (updateLearnerDto['schoolingId']) {
      learner = await this.appendSchooling(updateLearnerDto) as UpdateLearnerDto;
    }
    if (learner.bornDate) {
      learner.bornDate = moment(learner.bornDate).format('YYYY-MM-DD');
    }
    // tslint:disable-next-line: no-string-literal
    learner['updated'] = moment().format('YYYY-MM-DD HH:mm:ss');
    let learnerToUpdate = await this.findOne(learner.id);
    learnerToUpdate = {
      ...learnerToUpdate,
      ...learner,
    };
    return await this.learnerRepository.update(learner.id, learner);
  }

  async appendSchooling(learner: CreateLearnerDto | UpdateLearnerDto) {
    const schooling = await this.schoolingService.findOne(learner.schoolingId);
    delete learner.schoolingId;
    learner['schooling'] = schooling;
    return learner;
  }
}
