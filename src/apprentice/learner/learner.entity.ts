import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { CreateLearnerDto } from './learner.dto';
import * as moment from 'moment';
import { Schooling } from '../schooling/schooling.entity';

@Entity()
export class Learner {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500, default: '' })
  name: string;

  @Column({type: 'int', default: 1})
  literacyId: number;

  @Column({type: 'date', default: null})
  bornDate: string;

  @Column({type: 'timestamp', default: null})
  created: string;

  @Column({type: 'timestamp', default: null})
  updated: string;

  @Column({type: 'timestamp', default: null})
  deleted: string;

  @ManyToOne(type => Schooling)
  @JoinColumn()
  schooling: Schooling;

  constructor(learner?: CreateLearnerDto) {
    if (learner) {
      this.name = learner.name;
      this.literacyId = learner.literacyId;
      this.bornDate = moment(learner.bornDate).format('YYYY-MM-DD');
      this.created = moment().format('YYYY-MM-DD HH:mm:ss');
      this.updated = moment().format('YYYY-MM-DD HH:mm:ss');
      this.schooling = learner.schooling;
    }
  }

}
