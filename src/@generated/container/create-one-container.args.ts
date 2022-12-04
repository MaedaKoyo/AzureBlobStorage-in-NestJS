import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContainerCreateInput } from './container-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneContainerArgs {

    @Field(() => ContainerCreateInput, {nullable:false})
    @Type(() => ContainerCreateInput)
    @ValidateNested()
    @Type(() => ContainerCreateInput)
    data!: ContainerCreateInput;
}
