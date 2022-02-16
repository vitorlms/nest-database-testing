import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from './../src/user/entities/user.entity';

export const connection: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'test',
  port: 5432,
  entities: [User],
};
