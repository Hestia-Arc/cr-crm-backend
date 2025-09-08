import { Injectable } from '@nestjs/common';
import { User } from 'generated/prisma';
import { RepositoryFactory } from 'src/common/repositories/repository.factory';
import { SignUpDto } from 'src/core/auth/dto/sign-up.dto';

@Injectable()
export class UsersService {
  private userRepository: ReturnType<RepositoryFactory['createRepository']>;
  constructor(private repositoryFactory: RepositoryFactory) {
    this.userRepository = this.repositoryFactory.createRepository('user');
  }

  async create(data: SignUpDto): Promise<User | null> {
    return (await this.userRepository.create(data)) as User | null;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = (await this.userRepository.findByEmail(email)) as User | null;
    return user;
  }

  update() {
    return 'create';
  }

  delete() {
    return 'create';
  }
}
