import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { PhotoModule } from 'src/photo/photo.module';
import { PhotoService } from 'src/photo/photo.service';

@Module({
  imports: [TypeOrmModule.forFeature([User]), PhotoModule],
  controllers: [UserController],
  providers: [UserService, PhotoService],
})
export class UserModule {}
