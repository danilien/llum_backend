import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class APIToken {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp' })
  createdAt: Date;

  @Column()
  value: string;

  @Column()
  isValid: boolean;
}
