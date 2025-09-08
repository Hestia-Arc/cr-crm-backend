import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { BaseRepository } from './base.repository';

// type ModelName = 'lead' | 'user' | 'property';
// type ModelType<T extends ModelName> = T extends 'lead'
//   ? Lead
//   : T extends 'user'
//     ? User
//     : T extends 'property'
//       ? Property
//       : never;

@Injectable()
export class RepositoryFactory {
  constructor(private readonly prisma: PrismaService) {}

  createRepository<T>(modelName: string): BaseRepository<T> {
    return new BaseRepository<T>(this.prisma, modelName);
  }
  // createRepository<T extends ModelName>(
  //   modelName: T,
  // ): BaseRepository<ModelType<T>> {
  //   return new BaseRepository<ModelType<T>>(this.prisma, modelName);
  // }
}
