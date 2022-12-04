import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContainerWhereUniqueInput } from './container-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneContainerArgs {

    @Field(() => ContainerWhereUniqueInput, {nullable:false})
    @Type(() => ContainerWhereUniqueInput)
    where!: ContainerWhereUniqueInput;
}
