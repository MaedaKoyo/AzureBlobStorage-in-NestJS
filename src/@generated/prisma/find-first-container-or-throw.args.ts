import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ContainerWhereInput } from '../container/container-where.input';
import { Type } from 'class-transformer';
import { ContainerOrderByWithRelationInput } from '../container/container-order-by-with-relation.input';
import { ContainerWhereUniqueInput } from '../container/container-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ContainerScalarFieldEnum } from '../container/container-scalar-field.enum';

@ArgsType()
export class FindFirstContainerOrThrowArgs {

    @Field(() => ContainerWhereInput, {nullable:true})
    @Type(() => ContainerWhereInput)
    where?: ContainerWhereInput;

    @Field(() => [ContainerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ContainerOrderByWithRelationInput>;

    @Field(() => ContainerWhereUniqueInput, {nullable:true})
    cursor?: ContainerWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ContainerScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ContainerScalarFieldEnum>;
}
