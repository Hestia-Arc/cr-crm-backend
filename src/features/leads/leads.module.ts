import { Module } from '@nestjs/common';
import { LeadsService } from './leads.service';
import { LeadsController } from './leads.controller';
import { RepositoryFactory } from 'src/common/repositories/repository.factory';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [LeadsController],
  providers: [LeadsService, RepositoryFactory, PrismaService],
})
export class LeadsModule {}
