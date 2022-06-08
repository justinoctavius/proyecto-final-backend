import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CategoryController } from './controllers/category/category.controller';
import { TransactionController } from './controllers/transaction/transaction.controller';
import { Category } from './entities/category.entity';
import { Transaction } from './entities/transaction.entity';
import { CategoryService } from './services/category.service';
import { TransactionService } from './services/transaction.service';

@Module({
  controllers: [CategoryController, TransactionController],
  imports: [TypeOrmModule.forFeature([Transaction, Category])],
  providers: [TransactionService, CategoryService],
})
export class TransactionsModule {}
