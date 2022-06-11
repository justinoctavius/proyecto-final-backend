import { ConnectionOptions } from 'typeorm/connection/ConnectionOptions';

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
  entities: ['./**/*.entity{.js, .ts}'],
  migrations: [__dirname + '/migrations/*{.ts, .js}'],
  logging: true,
};

export = config;
