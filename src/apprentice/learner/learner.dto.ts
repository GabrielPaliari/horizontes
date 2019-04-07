import { ApiModelProperty } from '@nestjs/swagger';
import { Schooling } from '../schooling/schooling.entity';

export class CreateLearnerDto {
  @ApiModelProperty()
  readonly name: string;
  @ApiModelProperty()
  readonly bornDate: string;
  @ApiModelProperty()
  readonly literacyId: number;
  @ApiModelProperty()
  schoolingId?: number;
  schooling?: Schooling;
}

// tslint:disable-next-line: max-classes-per-file
export class UpdateLearnerDto {
  @ApiModelProperty()
  readonly id: number;
  @ApiModelProperty()
  readonly name?: string;
  @ApiModelProperty()
  bornDate?: string;
  @ApiModelProperty()
  readonly literacyId?: number;
  @ApiModelProperty()
  schoolingId?: number;
  schooling?: Schooling;
}
