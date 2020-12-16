import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ArPoint {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp' })
  createdAt: Date;

  @Column({ type: 'longtext' })
  data: string;
}
