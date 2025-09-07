import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LeadsModule } from './modules/leads/leads.module';
import { PropertiesModule } from './modules/properties/properties.module';
import { TransactionService } from './modules/transaction/transaction.service';
import { TransactionController } from './modules/transaction/transaction.controller';
import { TransactionModule } from './modules/transaction/transaction.module';
import { AuthModule } from './core/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './modules/user/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    LeadsModule,
    PropertiesModule,
    TransactionModule,
    UsersModule,
    AuthModule,
    PrismaModule,
  ],
  controllers: [AppController, TransactionController],
  providers: [AppService, TransactionService],
})
export class AppModule {}
