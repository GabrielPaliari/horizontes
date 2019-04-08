import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { HostelEntryService } from './hostel-entry.service';
import { CreateHostelEntryDto, UpdateHostelEntryDto } from './hostel-entry.dto';
import { HostelEntry } from './hostel-entry.entity';
import { ApiImplicitParam } from '@nestjs/swagger';

@Controller('hostel-entry')
export class HostelEntryController {
    constructor(private readonly hostelEntryService: HostelEntryService) {}

    @Post('checkIn')
    async create(@Body() hostelEntry: CreateHostelEntryDto) {
      const createdHostelEntry = await this.hostelEntryService.checkIn(hostelEntry);
      return createdHostelEntry;
    }

    @Get()
    async findAll(): Promise<HostelEntry[]> {
      return this.hostelEntryService.findAll();
    }

    @Put()
    async update(@Body() hostelEntry: UpdateHostelEntryDto) {
      const updatedHostelEntry = await this.hostelEntryService.update(hostelEntry as HostelEntry);
      return updatedHostelEntry;
    }

    @Put('checkOut')
    async checkOut(@Body() hostelEntry: UpdateHostelEntryDto) {
      const updatedHostelEntry = await this.hostelEntryService.update(hostelEntry as HostelEntry, true);
      return updatedHostelEntry;
    }

    @Delete(':id')
    @ApiImplicitParam({ name: 'id' })
    async delete(@Param('id') id) {
        return this.hostelEntryService.delete(id);
    }
}
