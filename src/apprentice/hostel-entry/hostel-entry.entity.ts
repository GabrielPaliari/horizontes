import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import * as moment from 'moment';
import { Learner } from '../learner/learner.entity';
import { CreateSchoolingDto } from '../schooling/schooling.dto';
import { CreateHostelEntryDto } from './hostel-entry.dto';

@Entity()
export class HostelEntry {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Learner)
  @JoinColumn()
  learner: Learner;

  @Column({ length: 255, default: '' })
  reasonLeave: string;

  @Column({ length: 255, default: '' })
  reasonCome: string;

  @Column({type: 'timestamp', default: null})
  checkIn: string;

  @Column({type: 'timestamp', default: null})
  checkOut: string;

  @Column({type: 'timestamp', default: null})
  deleted: string;

  constructor(hostelEntry?: CreateHostelEntryDto) {
    if (hostelEntry) {
      this.reasonLeave = hostelEntry.reasonLeave;
      this.reasonCome = hostelEntry.reasonCome;
      this.checkIn = moment().format('YYYY-MM-DD HH:mm:ss');
      if (hostelEntry.learner) {
        this.learner = hostelEntry.learner;
      }
    }
  }

}
