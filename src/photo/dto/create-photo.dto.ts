import { User } from 'src/user/entities/user.entity';

export class CreatePhotoDto {
  user: User;
  path: string;
}
