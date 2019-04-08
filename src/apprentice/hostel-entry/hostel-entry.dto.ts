import { ApiModelProperty } from '@nestjs/swagger';
import { Learner } from '../learner/learner.entity';

export class CreateHostelEntryDto {
  @ApiModelProperty()
  readonly learner?: Learner;
  @ApiModelProperty()
  readonly learnerId?: number;
  @ApiModelProperty()
  readonly reasonLeave?: string;
  @ApiModelProperty()
  readonly reasonCome?: string;
}

// tslint:disable-next-line: max-classes-per-file
export class UpdateHostelEntryDto {
  @ApiModelProperty()
  readonly id: number;
  @ApiModelProperty()
  readonly reasonLeave?: string;
  @ApiModelProperty()
  readonly reasonCome?: string;
}
