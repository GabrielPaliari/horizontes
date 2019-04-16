import { ApiModelProperty } from '@nestjs/swagger';
import { WritingLevel } from './writing-level.entity';
import { Learner } from '../learner/learner.entity';
// tslint:disable: max-classes-per-file
export class CreateWritingLevelDto {
  @ApiModelProperty()
  readonly name: string;
  @ApiModelProperty()
  readonly description: string;
}

export class UpdateWritingLevelDto {
  @ApiModelProperty()
  readonly id: number;
  @ApiModelProperty()
  readonly name?: string;
  @ApiModelProperty()
  readonly description?: string;
}

export class CreateLearnerWritingLevelDto {
  @ApiModelProperty()
  readonly learner: number | Learner;
  @ApiModelProperty()
  readonly writingLevel: number | WritingLevel;
  @ApiModelProperty()
  readonly obs?: string;
  @ApiModelProperty()
  readonly date?: string;
}
export class UpdateLearnerWritingLevelDto {
  @ApiModelProperty()
  readonly id: number;
  @ApiModelProperty()
  readonly obs?: string;
  @ApiModelProperty()
  date?: string;
}
