import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContainerWhereUniqueInput } from './container-where-unique.input';
import { Type } from 'class-transformer';
import { ContainerCreateInput } from './container-create.input';
import { ContainerUpdateInput } from './container-update.input';

@ArgsType()
export class UpsertOneContainerArgs {

    @Field(() => ContainerWhereUniqueInput, {nullable:false})
    @Type(() => ContainerWhereUniqueInput)
    where!: ContainerWhereUniqueInput;

    @Field(() => ContainerCreateInput, {nullable:false})
    @Type(() => ContainerCreateInput)
    create!: ContainerCreateInput;

    @Field(() => ContainerUpdateInput, {nullable:false})
    @Type(() => ContainerUpdateInput)
    update!: ContainerUpdateInput;
}
