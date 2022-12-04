import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContainerWhereUniqueInput } from '../container/container-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueContainerOrThrowArgs {

    @Field(() => ContainerWhereUniqueInput, {nullable:false})
    @Type(() => ContainerWhereUniqueInput)
    where!: ContainerWhereUniqueInput;
}
