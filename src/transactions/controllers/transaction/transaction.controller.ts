import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { TransactionService } from '../../services/transaction.service';
import { Transaction } from 'src/transactions/entities/transaction.entity';
import { AddTransactionDto } from 'src/transactions/dtos/add-transaction.dto';

@Controller('transactions')
export class TransactionController {
  constructor(private transactionService: TransactionService) {}

  @Get()
  async getTransactions(): Promise<Transaction[]> {
    return await this.transactionService.findAll();
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
