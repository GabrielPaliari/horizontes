import { Controller, Body, Post, Get, Put, Delete, Param } from '@nestjs/common';
import { WritingLevelService } from '../writing-level/writing-level.service';
import { CreateWritingLevelDto, UpdateWritingLevelDto } from '../writing-level/writing-level.dto';
import { WritingLevel } from '../writing-level/writing-level.entity';
import { ApiImplicitParam } from '@nestjs/swagger';

@Controller('substance')
export class SubstanceController {
    constructor(private readonly swritingLevelService: WritingLevelService) {}

    @Post()
    async create(@Body() swritingLevel: CreateWritingLevelDto) {
      const createdWritingLevel = await this.swritingLevelService.create(swritingLevel);
      return createdWritingLevel;
    }

    @Get()
    async findAll(): Promise<WritingLevel[]> {
      return this.swritingLevelService.findAll();
    }

    @Put()
    async update(@Body() swritingLevel: UpdateWritingLevelDto) {
      const updatedWritingLevel = await this.swritingLevelService.update(swritingLevel as WritingLevel);
      return updatedWritingLevel;
    }

    @Delete(':id')
    @ApiImplicitParam({ name: 'id' })
    async delete(@Param('id') id) {
        return this.swritingLevelService.delete(id);
    }
}
