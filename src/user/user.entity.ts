import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_user')
export class User {
  @PrimaryGeneratedColumn()
  uid: number;

  @Column()
  nickname: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @Column()
  level: string;
}
