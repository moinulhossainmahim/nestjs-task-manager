import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';
import { TaskStatus } from './task-status.enum';

@Entity()
export class Task extends BaseEntity {
  @PrimaryColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;
}
