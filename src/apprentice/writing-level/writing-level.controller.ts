import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { WritingLevelService } from './writing-level.service';
import { CreateWritingLevelDto, UpdateWritingLevelDto, CreateLearnerWritingLevelDto, UpdateLearnerWritingLevelDto } from './writing-level.dto';
import { WritingLevel } from './writing-level.entity';
import { ApiImplicitParam, ApiUseTags } from '@nestjs/swagger';
import { LearnerWritingLevel } from './learner-writing-level.entity';

@Controller('writing-level')
@ApiUseTags('Nível de escrita')
export class WritingLevelController {
    constructor(private readonly writingLevelService: WritingLevelService) {}

    @Post()
    async create(@Body() writingLevel: CreateWritingLevelDto) {
      const createdWritingLevel = await this.writingLevelService.create(writingLevel);
      return createdWritingLevel;
    }

    @Get()
    async findAll(): Promise<WritingLevel[]> {
      return this.writingLevelService.findAll();
    }

    @Put()
    async update(@Body() writingLevel: UpdateWritingLevelDto) {
      const updatedWritingLevel = await this.writingLevelService.update(writingLevel as WritingLevel);
      return updatedWritingLevel;
    }

    @Delete(':id')
    @ApiImplicitParam({ name: 'id' })
    async delete(@Param('id') id) {
        return this.writingLevelService.delete(id);
    }

    @Post('learner-writing')
    async createLearnerWritingLevel(@Body() writingLevel: CreateLearnerWritingLevelDto) {
      const learnerWriting = await this.writingLevelService.createLearnerWritingLevel(writingLevel);

      return learnerWriting;
    }

    @Get('learner-writing')
    async findAllLearnerWritingLevel(): Promise<LearnerWritingLevel[]> {
      return this.writingLevelService.findAllLearnerWritingLevel();
    }

    @Put('learner-writing')
    async updateLearnerWritingLevel(@Body() learnerWritingLevel: UpdateLearnerWritingLevelDto) {
      const updatedWritingLevel = await this.writingLevelService.updateLearnerWritingLevel(learnerWritingLevel);
      return updatedWritingLevel;
    }
}
