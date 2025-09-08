import { PrismaService } from 'src/prisma/prisma.service';

export class BaseRepository<T> {
  constructor(
    protected readonly prisma: PrismaService,
    private readonly modelName: string,
  ) {}

  async findAll(): Promise<T[]> {
    return await this.prisma[this.modelName].findMany();
  }

  async findById(id: number): Promise<T | null> {
    return await this.prisma[this.modelName].findUnique({
      where: { id },
    });
  }

  async findByEmail(email: string): Promise<T | null> {
    return await this.prisma[this.modelName].findUnique({
      where: { email: email },
    });
  }

  async create(data: any): Promise<T> {
    return await this.prisma[this.modelName].create({ data });
  }

  async update(id: string, data: any): Promise<T> {
    return await this.prisma[this.modelName].update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<T> {
    return await this.prisma[this.modelName].delete({
      where: { id },
    });
  }

  // Transaction support
  async createWithTransaction(data: any, tx: any): Promise<T> {
    return await tx[this.modelName].create({ data });
  }
}
