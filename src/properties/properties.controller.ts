import { PropertiesService } from './properties.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreatePropertiesDto } from './dto/create-property.dto';

@Controller('properties')
export class PropertiesController {
  constructor(private propertiesService: PropertiesService) {}

  @Post()
  create(@Body() createPropertiesDto: CreatePropertiesDto) {
    this.propertiesService.create(createPropertiesDto);
  }

  @Get()
  findAll() {
    try {
      this.propertiesService.findAll();
    } catch (error) {
      console.log(error);
    }
  }

  @Get(':id')
  findOne(@Param() id: string): string {
    return `This action returns a #${id} lead`;
  }
}
