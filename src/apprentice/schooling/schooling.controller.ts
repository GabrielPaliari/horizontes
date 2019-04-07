import { Controller, Post, Body, Put, Get, Param, Delete } from '@nestjs/common';
import { ApiImplicitParam } from '@nestjs/swagger';
import { SchoolingService } from './schooling.service';
import { CreateSchoolingDto, UpdateSchoolingDto } from './schooling.dto';
import { Schooling } from './schooling.entity';

@Controller('schooling')
export class SchoolingController {
    constructor(private readonly schoolingService: SchoolingService) {}

    @Post()
    async create(@Body() schooling: CreateSchoolingDto) {
      const createdSchooling = await this.schoolingService.create(schooling);
      return createdSchooling;
    }

    @Get()
    async findAll(): Promise<Schooling[]> {
      return this.schoolingService.findAll();
    }

    @Put()
    async update(@Body() schooling: UpdateSchoolingDto) {
      const updatedSchooling = await this.schoolingService.update(schooling as Schooling);
      return updatedSchooling;
    }

    @Delete(':id')
    @ApiImplicitParam({ name: 'id' })
    async delete(@Param('id') id) {
        return this.schoolingService.delete(id);
    }
}
