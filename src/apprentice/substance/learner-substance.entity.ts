import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Learner } from '../learner/learner.entity';
import { Substance } from './substance.entity';

@Entity()
export class LearnerSubstance {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Learner)
  @JoinColumn()
  learner: Learner;

  @ManyToOne(type => Substance)
  @JoinColumn()
  substance: Substance;

  @Column({default: 1 })
  timeOfUse: number; // Time in months that learner has used the substance

  @Column({ length: 255, default: '' })
  obs: string;

  constructor() {}

}
