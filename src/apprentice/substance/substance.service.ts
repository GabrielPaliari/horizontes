import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Substance } from './substance.entity';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { CreateSubstanceDto } from './substance.dto';

@Injectable()
export class SubstanceService {
  constructor(
    @InjectRepository(Substance)
    private readonly substanceRepository: Repository<Substance>,
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
}
