import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IconType } from '../constants/category.constants';
import { Transaction } from './transaction.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ enum: IconType })
  icon_type: IconType;

  @Column()
  color: string;

  @OneToMany(() => Transaction, (transaction) => transaction.category)
  transactions: Transaction[];
}
