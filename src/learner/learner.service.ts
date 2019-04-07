import { Injectable } from '@nestjs/common';
import { Learner } from './learner.entity';
import { Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateLearnerDto } from './learner.dto';
import * as moment from 'moment';

@Injectable()
export class LearnerService {
  constructor(
    @InjectRepository(Learner)
    private readonly learnerRepository: Repository<Learner>,
  ) {}

  async create(createLearnerDto: CreateLearnerDto): Promise<Learner> {
    const learner = new Learner(createLearnerDto);
    return await this.learnerRepository.save(learner);
  }

  async update(learner: Learner): Promise<UpdateResult> {
    if (learner.bornDate) {
      learner.bornDate = moment(learner.bornDate).format('YYYY-MM-DD');
    }
    learner.updated = moment().format('YYYY-MM-DD HH:mm:ss');
    let learnerToUpdate = await this.findOne(learner.id);
    learnerToUpdate = {
      ...learnerToUpdate,
      ...learner,
    };
    return await this.learnerRepository.update(learner.id, learner);
  }

  async findAll(): Promise<Learner[]> {
    return await this.learnerRepository.find();
  }

  async findOne(id: number): Promise<Learner> {
    return await this.learnerRepository.findOne(id);
  }
}
