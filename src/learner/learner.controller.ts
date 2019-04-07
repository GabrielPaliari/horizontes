import { Controller, Post, Header, Body, Get, Param, Put } from '@nestjs/common';
import { LearnerService } from './learner.service';
import { Learner } from './learner.entity';
import { CreateLearnerDto, UpdateLearnerDto } from './learner.dto';
import { ApiImplicitParam } from '@nestjs/swagger';

@Controller('learner')
export class LearnerController {
  constructor(private readonly learnerService: LearnerService) {}

  @Post()
  async create(@Body() learner: CreateLearnerDto) {
    const createdLearner = await this.learnerService.create(learner);
    return createdLearner;
  }

  @Put()
  async update(@Body() learner: UpdateLearnerDto) {
    const updatedLearner = await this.learnerService.update(learner as Learner);
    return updatedLearner;
  }

  @Get()
  async findAll(): Promise<Learner[]> {
    return this.learnerService.findAll();
  }

  @Get(':id')
  @ApiImplicitParam({ name: 'id' })
  async findOne(@Param('id') id): Promise<Learner> {
    return this.learnerService.findOne(id);
  }
}
