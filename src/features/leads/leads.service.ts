import { Injectable } from '@nestjs/common';
import { CreateLeadDto } from './dto/create-lead.dto';
import { UpdateLeadDto } from './dto/update-lead.dto';
import { RepositoryFactory } from 'src/common/repositories/repository.factory';
import { Lead } from 'generated/prisma';
import { BaseRepository } from 'src/common/repositories/base.repository';

@Injectable()
export class LeadsService {
  private leadRepository: BaseRepository<Lead>;

  constructor(private repositoryFactory: RepositoryFactory) {
    this.leadRepository = this.repositoryFactory.createRepository<Lead>('lead');
  }
  // private leadRepository: BaseRepository<Lead>;
  // constructor(private repositoryFactory: RepositoryFactory) {
  //   this.leadRepository = this.repositoryFactory.createRepository('lead');
  // }

  scoreLead(lead: Lead): number {
    // const features = lead.toFeatures(); // Extract vector (e.g., budget, activity)
    // return this.aiAdapter.predict(features); // Calls ML endpoint
    return 42; // Dummy score for illustration
  }

  async create(data: CreateLeadDto): Promise<Lead> {
    const savedLead = await this.leadRepository.create(data);
    const score = this.scoreLead(savedLead);
    await this.leadRepository.update(savedLead.id, { score });
    return savedLead;
  }

  findAll() {
    return `This action returns all leads`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lead`;
  }

  update(id: number, updateLeadDto: UpdateLeadDto) {
    return `This action updates a #${id} ${JSON.stringify(updateLeadDto)} lead`;
  }

  remove(id: number) {
    return `This action removes a #${id} lead`;
  }
}
