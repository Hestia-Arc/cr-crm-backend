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

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    LeadsModule,
    PropertiesModule,
    TransactionModule,
    AuthModule,
  ],
  controllers: [AppController, TransactionController],
  providers: [AppService, TransactionService],
})
export class AppModule {}
