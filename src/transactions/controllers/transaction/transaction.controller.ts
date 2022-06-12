import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';

import { TransactionService } from '../../services/transaction.service';
import { Transaction } from 'src/transactions/entities/transaction.entity';
import { AddTransactionDto } from 'src/transactions/dtos/add-transaction.dto';
import { TransactionQueryParams } from 'src/transactions/dtos/transaction-query-params.dto';
@Controller('transactions')
export class TransactionController {
  constructor(private transactionService: TransactionService) {}

  @Get()
  async getTransactions(
    @Query() queries: TransactionQueryParams,
  ): Promise<Transaction[]> {
    return await this.transactionService.findAll(queries);
  }

  @Post()
  async addTransaction(@Body() addTransactionDto: AddTransactionDto) {
    return await this.transactionService.add(addTransactionDto);
  }

  @Delete(':id')
  async deleteTransaction(@Param('id') id: string) {
    return await this.transactionService.delete(id);
  }
}
