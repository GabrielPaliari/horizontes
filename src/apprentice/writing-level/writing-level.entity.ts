import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CreateWritingLevelDto } from './writing-level.dto';
import * as moment from 'moment';

@Entity()
export class WritingLevel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50, default: '' })
  name: string;

  @Column({ length: 255, default: '' })
  description: string;

  constructor(scooling?: CreateWritingLevelDto) {
    if (scooling) {
      this.name = scooling.name;
      this.description = scooling.description;
    }
  }

}
