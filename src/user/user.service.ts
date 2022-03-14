import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { PhotoService } from 'src/photo/photo.service';
import { Connection } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectConnection()
    private readonly connection: Connection,
    private readonly photoService: PhotoService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const userRespository = this.connection.getRepository(User);

    return await userRespository.save(createUserDto);
  }

  async findAll() {
    const userRespository = this.connection.getRepository(User);

    return userRespository.find();
  }

  async findOne(id: number) {
    const userRespository = this.connection.getRepository(User);

    return await userRespository.findOne(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const userRespository = this.connection.getRepository(User);

    return await userRespository.update(id, updateUserDto);
  }

  async remove(id: number) {
    const userRespository = this.connection.getRepository(User);

    return await userRespository.delete(id);
  }

  async transactionTest() {
    // usar conexão para criar um query runner
    const queryRunner = this.connection.createQueryRunner();

    // iniciar a transação do query runner
    await queryRunner.startTransaction();
    try {
      // criamos entidade a ser utilizada pelas queries
      const user = new User();
      user.name = 'test';

      // fazemos query de inserção de usuário
      await this.connection
        .createQueryBuilder(queryRunner)
        .insert()
        .into(User)
        .values(user)
        .execute();

      // verificamos que informações user possui
      console.log('1 user entity', user);

      // chamamos o novo service
      await this.photoService.transactionTest(queryRunner, {
        user: user,
        path: 'caminho/de/teste/para/foto',
      });

      // commitamos a transação
      await queryRunner.commitTransaction();
    } catch (err) {
      console.log(err);
      queryRunner.rollbackTransaction();
    } finally {
      queryRunner.release();
    }
  }

  async transactionTest2() {
    // usar conexão para criar um query runner
    const queryRunner = this.connection.createQueryRunner();

    // iniciar a transação do query runner
    await queryRunner.startTransaction();
    try {
      // criamos entidade a ser utilizada pelas queries
      let user = new User();
      user.name = 'test2';

      // fazemos query de inserção de usuário
      user = await queryRunner.manager.save(user);

      // verificamos que informações user possui
      console.log('user entity', user);

      // chamamos o novo service
      await this.photoService.transactionTest(queryRunner, {
        user: user,
        path: 'caminho2/de2/teste2/para2/foto2',
      });

      // commitamos a transação
      await queryRunner.commitTransaction();
    } catch (err) {
      console.log(err);
      queryRunner.rollbackTransaction();
    } finally {
      queryRunner.release();
    }
  }

  async transactionTest3() {
    // usar conexão para criar um query runner
    const queryRunner = this.connection.createQueryRunner();

    // iniciar a transação do query runner
    await queryRunner.startTransaction();
    try {
      // criamos entidade a ser utilizada pelas queries
      const user = new User();
      user.name = 'test';

      // fazemos query de inserção de usuário
      await this.connection
        .createQueryBuilder(queryRunner)
        .insert()
        .into(User)
        .values(user)
        .execute();

      // verificamos que informações user possui
      console.log('3 user entity', user);

      // chamamos o novo service
      await this.photoService.transactionTest3(queryRunner, {
        user: user,
        path: 'caminho/de/teste/para/foto',
      });

      // commitamos a transação
      await queryRunner.commitTransaction();
    } catch (err) {
      console.log(err);
      queryRunner.rollbackTransaction();
    } finally {
      queryRunner.release();
    }
  }

  async transactionTest4() {
    // usar conexão para criar um query runner
    const queryRunner = this.connection.createQueryRunner();

    // iniciar a transação do query runner
    await queryRunner.startTransaction();
    try {
      // criamos entidade a ser utilizada pelas queries
      const user = new User();
      user.name = 'test';

      // fazemos query de inserção de usuário
      await this.connection
        .createQueryBuilder(queryRunner)
        .insert()
        .into(User)
        .values(user)
        .execute();

      // verificamos que informações user possui
      console.log('4 user entity', user);

      // chamamos o novo service
      await this.photoService.transactionTest4(queryRunner, {
        user: user,
        path: 'caminho/de/teste/para/foto',
      });

      // commitamos a transação
      await queryRunner.commitTransaction();
    } catch (err) {
      console.log('transaction error, rolling back...', err);
      queryRunner.rollbackTransaction();
    } finally {
      queryRunner.release();
    }
  }

  async transactionTest5() {
    // usar conexão para criar um query runner
    const queryRunner = this.connection.createQueryRunner();

    // iniciar a transação do query runner
    await queryRunner.startTransaction();
    try {
      // criamos entidade a ser utilizada pelas queries
      const user = new User();
      user.name = 'test';

      // fazemos query de inserção de usuário
      await this.connection
        .createQueryBuilder(queryRunner)
        .insert()
        .into(User)
        .values(user)
        .execute();

      // verificamos que informações user possui
      console.log('5 user entity', user);

      // chamamos o novo service
      await this.photoService.transactionTest5(queryRunner, {
        user: user,
        path: 'caminho/de/teste/para/foto',
      });

      // commitamos a transação
      await queryRunner.commitTransaction();
    } catch (err) {
      console.log(err);
      queryRunner.rollbackTransaction();
    } finally {
      queryRunner.release();
    }
  }
}
