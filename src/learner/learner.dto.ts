import { ApiModelProperty } from '@nestjs/swagger';

export class CreateLearnerDto {
  @ApiModelProperty()
  readonly name: string;
  @ApiModelProperty()
  readonly bornDate: string;
  @ApiModelProperty()
  readonly scolarityId: number;
  @ApiModelProperty()
  readonly literacyId: number;
}

// tslint:disable-next-line: max-classes-per-file
export class UpdateLearnerDto {
  @ApiModelProperty()
  readonly id: number;
  @ApiModelProperty()
  readonly name?: string;
  @ApiModelProperty()
  readonly bornDate?: string;
  @ApiModelProperty()
  readonly scolarityId?: number;
  @ApiModelProperty()
  readonly literacyId?: number;
}
