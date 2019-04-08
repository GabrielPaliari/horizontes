import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { WritingLevelService } from './writing-level.service';
import { CreateWritingLevelDto, UpdateWritingLevelDto } from './writing-level.dto';
import { WritingLevel } from './writing-level.entity';
import { ApiImplicitParam } from '@nestjs/swagger';

@Controller('writing-level')
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
}
