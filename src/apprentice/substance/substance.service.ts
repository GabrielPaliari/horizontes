import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Substance } from './substance.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { CreateSubstanceDto, CreateLearnerSubstanceDto, UpdateLearnerSubstanceDto } from './substance.dto';
import { LearnerSubstance } from './learner-substance.entity';

@Injectable()
export class SubstanceService {
  constructor(
    @InjectRepository(Substance)
    private readonly substanceRepository: Repository<Substance>,
    @InjectRepository(LearnerSubstance)
    private readonly learnerSubstanceRepository: Repository<LearnerSubstance>,
  ) {}

  async create(createSubstanceDto: CreateSubstanceDto): Promise<Substance> {
    const substance = new Substance(createSubstanceDto);
    return await this.substanceRepository.save(substance);
  }

  async findAll(): Promise<Substance[]> {
    return await this.substanceRepository.find();
  }

  async findOne(id: number): Promise<Substance> {
    return await this.substanceRepository.findOne(id);
  }

  async update(substance: Substance): Promise<UpdateResult> {
    let substanceToUpdate = await this.findOne(substance.id);
    substanceToUpdate = {
      ...substanceToUpdate,
      ...substance,
    };
    return await this.substanceRepository.update(substance.id, substance);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.substanceRepository.delete(id);
  }

  // LearnerSubstance Functions
  async createLearnerSubstance(createLearnerSubstanceDto: CreateLearnerSubstanceDto): Promise<LearnerSubstance> {
    return await this.learnerSubstanceRepository.save(createLearnerSubstanceDto as LearnerSubstance);
  }

  async findAllLearnerSubstance(): Promise<LearnerSubstance[]> {
    return await this.learnerSubstanceRepository.find({ relations: ['learner', 'substance']});
  }

  async findOneLearnerSubstance(id: number): Promise<LearnerSubstance> {
    return await this.learnerSubstanceRepository.findOne(id);
  }

  async updateLearnerSubstance(learnerSubstance: UpdateLearnerSubstanceDto): Promise<UpdateResult> {
    return await this.learnerSubstanceRepository.update(learnerSubstance.id, learnerSubstance);
  }

  async deleteLearnerSubstance(id: number): Promise<DeleteResult> {
    return await this.learnerSubstanceRepository.delete(id);
  }

}
