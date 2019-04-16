import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { CreateWritingLevelDto, CreateLearnerWritingLevelDto, UpdateLearnerWritingLevelDto } from './writing-level.dto';
import * as moment from 'moment';
import { WritingLevel } from './writing-level.entity';
import { LearnerWritingLevel } from './learner-writing-level.entity';

@Injectable()
export class WritingLevelService {
  constructor(
    @InjectRepository(WritingLevel)
    private readonly writingLevelRepository: Repository<WritingLevel>,
    @InjectRepository(LearnerWritingLevel)
    private readonly learnerWritingLevelRepository: Repository<LearnerWritingLevel>,
  ) {}

  async create(createWritingLevelDto: CreateWritingLevelDto): Promise<WritingLevel> {
    const writingLevel = new WritingLevel(createWritingLevelDto);
    return await this.writingLevelRepository.save(writingLevel);
  }

  async findAll(): Promise<WritingLevel[]> {
    return await this.writingLevelRepository.find();
  }

  async findOne(id: number): Promise<WritingLevel> {
    return await this.writingLevelRepository.findOne(id);
  }

  async update(writingLevel: WritingLevel): Promise<UpdateResult> {
    return await this.writingLevelRepository.update(writingLevel.id, writingLevel);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.writingLevelRepository.delete(id);
  }

  async createLearnerWritingLevel(createLWDto: CreateLearnerWritingLevelDto): Promise<LearnerWritingLevel> {
    const learnerWriting = {
      ...createLWDto,
      date: this.formatDate(createLWDto.date),
    };
    return await this.learnerWritingLevelRepository.save(learnerWriting as LearnerWritingLevel);
  }

  async findAllLearnerWritingLevel(): Promise<LearnerWritingLevel[]> {
    return await this.learnerWritingLevelRepository.find({ relations: ['learner', 'writingLevel']});
  }

  async findOneLearnerWritingLevel(id: number): Promise<LearnerWritingLevel> {
    return await this.learnerWritingLevelRepository.findOne(id);
  }

  async updateLearnerWritingLevel(learnerWritingLevel: UpdateLearnerWritingLevelDto): Promise<UpdateResult> {
    if (learnerWritingLevel.date) {
      learnerWritingLevel.date = this.formatDate(learnerWritingLevel.date);
    }
    return await this.learnerWritingLevelRepository.update(learnerWritingLevel.id, learnerWritingLevel);
  }

  async deleteLearnerWritingLevel(id: number): Promise<DeleteResult> {
    return await this.learnerWritingLevelRepository.delete(id);
  }

  formatDate(date?: string) {
    return date ? moment(date).format() : moment().format();
  }
}
