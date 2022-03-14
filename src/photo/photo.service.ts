import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection, QueryRunner } from 'typeorm';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { Photo } from './entities/photo.entity';

@Injectable()
export class PhotoService {
  constructor(
    @InjectConnection()
    private readonly connection: Connection,
  ) {}

  create(createPhotoDto: CreatePhotoDto) {
    return 'This action adds a new photo';
  }

  findAll() {
    return `This action returns all photo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} photo`;
  }

  update(id: number, updatePhotoDto: UpdatePhotoDto) {
    return `This action updates a #${id} photo`;
  }

  remove(id: number) {
    return `This action removes a #${id} photo`;
  }

  async transactionTest(
    queryRunner: QueryRunner,
    createPhotoDto: CreatePhotoDto,
  ) {
    console.log('createPhotoDto 1', createPhotoDto);

    await this.connection
      .createQueryBuilder(queryRunner)
      .insert()
      .into(Photo)
      .values(createPhotoDto)
      .execute();
  }

  async transactionTest2(
    queryRunner: QueryRunner,
    createPhotoDto: CreatePhotoDto,
  ) {
    console.log('createPhotoDto 2', createPhotoDto);

    const photo = new Photo();
    photo.user = createPhotoDto.user;
    photo.path = createPhotoDto.path;

    await queryRunner.manager.save(photo);
  }

  async transactionTest3(
    queryRunner: QueryRunner,
    createPhotoDto: CreatePhotoDto,
  ) {
    console.log('createPhotoDto 3', createPhotoDto);

    throw Error('transaction test 3 error!');

    await this.connection
      .createQueryBuilder(queryRunner)
      .insert()
      .into(Photo)
      .values(createPhotoDto)
      .execute();
  }

  async transactionTest4(
    queryRunner: QueryRunner,
    createPhotoDto: CreatePhotoDto,
  ) {
    console.log('createPhotoDto 4', createPhotoDto);

    await this.connection
      .createQueryBuilder(queryRunner)
      .insert()
      .into(Photo)
      .values(createPhotoDto)
      .execute();

    throw Error('transaction test 4 error!');
  }

  async transactionTest5(
    queryRunner: QueryRunner,
    createPhotoDto: CreatePhotoDto,
  ) {
    console.log('createPhotoDto 5', createPhotoDto);

    await this.connection
      .createQueryBuilder(queryRunner)
      .insert()
      .into(Photo)
      .values(createPhotoDto)
      .execute();

    throw Error('transaction test 5 error!');

    await this.connection
      .createQueryBuilder(queryRunner)
      .insert()
      .into(Photo)
      .values(createPhotoDto)
      .execute();
  }
}
