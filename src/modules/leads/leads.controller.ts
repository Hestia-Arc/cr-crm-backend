import { LeadsService } from './leads.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateLeadDto } from './dto/create-lead.dto';

@Controller('leads')
export class LeadsController {
  constructor(private leadsService: LeadsService) {}

  @Post()
  create(@Body() createLeadDto: CreateLeadDto) {
    this.leadsService.create(createLeadDto);
  }

  @Get()
  findAll() {
    this.leadsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `This action returns a #${id} lead`;
  }
}
