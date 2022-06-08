import { TransactionType } from '../constants/transaction.constants';
import { Category } from './category.entity';

export interface Transaction {
  id: string;
  description: string;
  mount: number;
  date: Date;
  type: TransactionType;
  category: Category;
}
