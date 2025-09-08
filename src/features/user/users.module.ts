import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { RepositoryFactory } from 'src/common/repositories/repository.factory';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PrismaModule],
  providers: [UsersService, RepositoryFactory, PrismaService],
  exports: [UsersService],
})
export class UsersModule {}
