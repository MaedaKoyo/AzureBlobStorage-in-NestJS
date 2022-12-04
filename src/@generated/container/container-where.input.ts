import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class ContainerWhereInput {

    @Field(() => [ContainerWhereInput], {nullable:true})
    AND?: Array<ContainerWhereInput>;

    @Field(() => [ContainerWhereInput], {nullable:true})
    OR?: Array<ContainerWhereInput>;

    @Field(() => [ContainerWhereInput], {nullable:true})
    NOT?: Array<ContainerWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    account?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    age?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    url?: StringNullableFilter;
}
