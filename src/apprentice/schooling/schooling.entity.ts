import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CreateSchoolingDto } from './schooling.dto';
import * as moment from 'moment';

@Entity()
export class Schooling {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, default: '' })
  name: string;

  @Column({ length: 255, default: '' })
  description: string;

  @Column({type: 'timestamp', default: null})
  created: string;

  @Column({type: 'timestamp', default: null})
  updated: string;

  @Column({type: 'timestamp', default: null})
  deleted: string;

  constructor(scooling?: CreateSchoolingDto) {
    if (scooling) {
      this.name = scooling.name;
      this.description = scooling.description;
      this.created = moment().format('YYYY-MM-DD HH:mm:ss');
      this.updated = moment().format('YYYY-MM-DD HH:mm:ss');
    }
  }

}
