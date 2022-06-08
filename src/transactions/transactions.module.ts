import { Module } from '@nestjs/common';
import { CategoryController } from './controllers/category/category.controller';

@Module({
  controllers: [CategoryController, TransactionModule],
  providers: [],
})
export class TransactionModule {}
