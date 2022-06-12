import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal, Repository } from 'typeorm';

import { Transaction } from '../entities/transaction.entity';
import { Category } from '../entities/category.entity';

import { AddTransactionDto } from '../dtos/add-transaction.dto';
import { TransactionQueryParams } from '../dtos/transaction-query-params.dto';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction)
    private transactionsRepository: Repository<Transaction>,
  ) {}

  async findAll(queryParams: TransactionQueryParams) {
    try {
      Logger.log('[Info]: Start find transactions');
      const transactions = await this.transactionsRepository.find({
        where: { ...queryParams },
      });
      Logger.log('[Info]: End find transactions');
      return transactions;
    } catch (error) {
      Logger.error('[Error]: Error on find transaction: ' + error);
      throw error;
    }
  }

  async add(transactionDto: AddTransactionDto) {
    console.log(JSON.stringify(transactionDto, undefined, 2));
    try {
      Logger.log('Start save transaction');
      const category = new Category();
      category.id = transactionDto.category_id;
      await this.transactionsRepository.save({
        ...transactionDto,
        category,
      });
      Logger.log('End save transaction');
    } catch (error) {
      Logger.error('[Error]: Error on save transaction: ' + error);
      throw error;
    }
  }

  async delete(id: string) {
    try {
      Logger.log('Start delete transaction');
      await this.transactionsRepository.delete({ id });
      Logger.log('End delete transaction');
    } catch (error) {
      Logger.error('Error on delete transaction: ' + error);
      throw error;
    }
  }
}
