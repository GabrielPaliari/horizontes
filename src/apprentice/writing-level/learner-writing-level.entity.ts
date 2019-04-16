import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { CreateWritingLevelDto } from './writing-level.dto';
import { Learner } from '../learner/learner.entity';
import { WritingLevel } from './writing-level.entity';

@Entity()
export class LearnerWritingLevel {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Learner)
  @JoinColumn()
  learner: Learner;

  @ManyToOne(type => WritingLevel)
  @JoinColumn()
  writingLevel: WritingLevel;

  @Column({ length: 255, default: '' })
  obs: string;

  @Column({type: 'timestamp', default: null})
  date: string;

  constructor() {}

}
