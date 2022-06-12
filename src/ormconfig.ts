import { ConnectionOptions } from 'typeorm/connection/ConnectionOptions';
import { Category } from './transactions/entities/category.entity';
import { Transaction } from './transactions/entities/transaction.entity';

const config: ConnectionOptions = {
  type: 'postgres',
  host: 'postgres-db',
  port: 5432,
  username: 'admin',
  password: '123',
  database: 'final_proyect',
  migrationsTableName: 'migrations',
  synchronize: false,
  migrationsRun: true,
  entities: [Transaction, Category],
  migrations: [__dirname + '/migrations/*{.ts, .js}'],
  logging: false,
};

export = config;
