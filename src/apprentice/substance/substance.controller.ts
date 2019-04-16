import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { SubstanceService } from './substance.service';
import { ApiImplicitParam, ApiUseTags } from '@nestjs/swagger';
import { CreateSubstanceDto, UpdateSubstanceDto, CreateLearnerSubstanceDto, UpdateLearnerSubstanceDto } from './substance.dto';
import { Substance } from './substance.entity';
import { LearnerSubstance } from './learner-substance.entity';

@Controller('substance')
@ApiUseTags('Substâncias')
export class SubstanceController {
    constructor(private readonly substanceService: SubstanceService) {}

    @Post()
    async create(@Body() substance: CreateSubstanceDto) {
      const createdSubstance = await this.substanceService.create(substance);
      return createdSubstance;
    }

    @Get()
    async findAll(): Promise<Substance[]> {
      return this.substanceService.findAll();
    }

    @Put()
    async update(@Body() substance: UpdateSubstanceDto) {
      const updatedSubstance = await this.substanceService.update(substance as Substance);
      return updatedSubstance;
    }

    @Delete(':id')
    @ApiImplicitParam({ name: 'id' })
    async delete(@Param('id') id) {
        return this.substanceService.delete(id);
    }

    @Post('learner')
    async createLearnerSubstance(@Body() learnerSubstance: CreateLearnerSubstanceDto) {
      const createdSubstance = await this.substanceService.createLearnerSubstance(learnerSubstance);
      return createdSubstance;
    }

    @Get('learner')
    async findAllLearnerSubstance(): Promise<LearnerSubstance[]> {
      return this.substanceService.findAllLearnerSubstance();
    }

    @Put('learner')
    async updateLearnerSubstance(@Body() learnerSubstance: UpdateLearnerSubstanceDto) {
      const updatedSubstance = await this.substanceService.updateLearnerSubstance(learnerSubstance);
      return updatedSubstance;
    }

    @Delete('learner/:id')
    @ApiImplicitParam({ name: 'id' })
    async deleteLearnerSubstance(@Param('id') id) {
        return this.substanceService.deleteLearnerSubstance(id);
    }
}
