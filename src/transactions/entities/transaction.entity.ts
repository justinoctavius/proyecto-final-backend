import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { TransactionType } from '../constants/transaction.constants';
import { Category } from './category.entity';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  description: string;

  @Column()
  mount: number;

  @Column()
  date: Date;

  @Column({ enum: TransactionType })
  type: TransactionType;

  @ManyToOne(() => Category, (category) => category.transactions, {
    eager: true,
  })
  @JoinColumn({ name: 'category_id' })
  category: Category;
}
