import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { SubstanceService } from './substance.service';
import { ApiImplicitParam, ApiUseTags } from '@nestjs/swagger';
import { CreateSubstanceDto, UpdateSubstanceDto } from './substance.dto';
import { Substance } from './substance.entity';

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
}
