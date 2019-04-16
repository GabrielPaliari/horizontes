import { ApiModelProperty } from '@nestjs/swagger';
import { Learner } from '../learner/learner.entity';
import { Substance } from './substance.entity';
// tslint:disable: max-classes-per-file

export class CreateSubstanceDto {
  @ApiModelProperty()
  readonly name: string;
  @ApiModelProperty()
  readonly description: string;
}

export class UpdateSubstanceDto {
  @ApiModelProperty()
  readonly id: number;
  @ApiModelProperty()
  readonly name?: string;
  @ApiModelProperty()
  readonly description?: string;
}

export class CreateLearnerSubstanceDto {
  @ApiModelProperty()
  readonly learner: number | Learner;
  @ApiModelProperty()
  readonly substance: number | Substance;
  @ApiModelProperty()
  readonly timeOfUse?: number;
  @ApiModelProperty()
  readonly obs?: string;
}
export class UpdateLearnerSubstanceDto {
  @ApiModelProperty()
  readonly id: number;
  @ApiModelProperty()
  readonly timeOfUse?: number;
  @ApiModelProperty()
  readonly obs?: string;
}
