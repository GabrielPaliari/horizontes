import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { CreateHostelEntryDto } from './hostel-entry.dto';
import moment = require('moment');
import { HostelEntry } from './hostel-entry.entity';
import { LearnerService } from '../learner/learner.service';

@Injectable()
export class HostelEntryService {
  constructor(
    @InjectRepository(HostelEntry)
    private readonly hostelEntryRepository: Repository<HostelEntry>,
    private readonly learnerService: LearnerService,
  ) {}

  async checkIn(createHostelEntryDto: CreateHostelEntryDto): Promise<HostelEntry> {
    const hostelEntry = new HostelEntry(createHostelEntryDto);
    if (createHostelEntryDto.learnerId) {
      hostelEntry.learner = await this.learnerService.findOne(createHostelEntryDto.learnerId);
    }
    return await this.hostelEntryRepository.save(hostelEntry);
  }

  async findAll(): Promise<HostelEntry[]> {
    return await this.hostelEntryRepository.find({ relations: ['learner'] });
  }

  async findOne(id: number): Promise<HostelEntry> {
    return await this.hostelEntryRepository.findOne(id);
  }

  async update(hostelEntry: HostelEntry, checkOut?: boolean): Promise<UpdateResult> {
    if (checkOut) {
      hostelEntry.checkOut = moment().format('YYYY-MM-DD HH:mm:ss');
    }
    let hostelEntryToUpdate = await this.findOne(hostelEntry.id);
    hostelEntryToUpdate = {
      ...hostelEntryToUpdate,
      ...hostelEntry,
    };
    return await this.hostelEntryRepository.update(hostelEntry.id, hostelEntry);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.hostelEntryRepository.delete(id);
  }
}
