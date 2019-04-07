import { ApiModelProperty } from '@nestjs/swagger';

export class CreateSchoolingDto {
  @ApiModelProperty()
  readonly name: string;
  @ApiModelProperty()
  readonly description: string;
}

// tslint:disable-next-line: max-classes-per-file
export class UpdateSchoolingDto {
  @ApiModelProperty()
  readonly id: number;
  @ApiModelProperty()
  readonly name?: string;
  @ApiModelProperty()
  readonly description?: string;
}
