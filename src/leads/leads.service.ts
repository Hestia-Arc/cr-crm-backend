import { Injectable } from '@nestjs/common';
import { Lead } from './interfaces/lead.interface';

@Injectable()
export class LeadsService {
  private readonly leads: Lead[] = [];

  create(lead: Lead) {
    this.leads.push(lead);
  }

  findAll(): Lead[] {
    return this.leads;
  }
}
