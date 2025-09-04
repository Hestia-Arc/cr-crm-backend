import { Injectable } from '@nestjs/common';
import { Property } from './interfaces/property.interface';

@Injectable()
export class PropertiesService {
  private readonly properties: Property[] = [];

  create(properties: Property) {
    this.properties.push(properties);
  }

  findAll(): Property[] {
    return this.properties;
  }
}
