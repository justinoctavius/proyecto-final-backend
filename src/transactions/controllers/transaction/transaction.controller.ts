import { Controller, Delete, Get, Post } from '@nestjs/common';

@Controller('transactions')
export class TransactionController {
  @Get()
  getTransactions() {
    return;
  }

  @Post()
  addTransaction() {
    return;
  }

  @Delete()
  deleteTransaction() {
    return;
  }
}
