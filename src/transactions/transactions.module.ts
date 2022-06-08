import { Module } from '@nestjs/common';

import { CategoryController } from './controllers/category/category.controller';
import { TransactionController } from './controllers/transaction/transaction.controller';
import { CategoryService } from './services/category.service';
import { TransactionService } from './services/transaction.service';

@Module({
  controllers: [CategoryController, TransactionController],
  providers: [TransactionService, CategoryService],
})
export class TransactionModule {}
