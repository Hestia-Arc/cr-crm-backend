import { Injectable } from '@nestjs/common';
import { Prisma, User } from 'generated/prisma';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data });
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { email: email },
    });

    return user;
  }

  // findOne(username: string): Promise<User | undefined> {
  //   return this.prisma.user.findFirst((user) => user.email === username);
  // }

  update() {
    return 'create';
  }

  delete() {
    return 'create';
  }
}
