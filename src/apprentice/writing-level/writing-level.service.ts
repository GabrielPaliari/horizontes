import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { CreateWritingLevelDto } from './writing-level.dto';
import moment = require('moment');
import { WritingLevel } from './writing-level.entity';

@Injectable()
export class WritingLevelService {
  constructor(
    @InjectRepository(WritingLevel)
    private readonly writingLevelRepository: Repository<WritingLevel>,
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
    let writingLevelToUpdate = await this.findOne(writingLevel.id);
    writingLevelToUpdate = {
      ...writingLevelToUpdate,
      ...writingLevel,
    };
    return await this.writingLevelRepository.update(writingLevel.id, writingLevel);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.writingLevelRepository.delete(id);
  }
}
