import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CreateSubstanceDto } from './substance.dto';
import * as moment from 'moment';

@Entity()
export class Substance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, default: '' })
  name: string;

  @Column({ length: 255, default: '' })
  description: string;

  constructor(scooling?: CreateSubstanceDto) {
    if (scooling) {
      this.name = scooling.name;
      this.description = scooling.description;
    }
  }

}
