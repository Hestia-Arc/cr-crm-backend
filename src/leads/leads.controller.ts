import { LeadsService } from './leads.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateLeadDto } from './dto/create-lead.dto';
import { Lead } from './interfaces/lead.interface';

@Controller('leads')
export class LeadsController {
  constructor(private leadsService: LeadsService) {}

  @Post()
  create(@Body() createLeadDto: CreateLeadDto) {
    this.leadsService.create(createLeadDto);
  }

  @Get()
  async findAll(): Promise<Lead[]> {
    return this.leadsService.findAll();
  }

  @Get(':id')
  findOne(@Param() id: string): string {
    return `This action returns a #${id} lead`;
  }
}
