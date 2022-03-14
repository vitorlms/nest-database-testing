import { Photo } from 'src/photo/entities/photo.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @OneToMany(() => Photo, (photo) => photo.user)
  photo: Photo[];

  @Column()
  name: string;
}
