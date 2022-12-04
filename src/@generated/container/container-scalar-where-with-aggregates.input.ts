import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class ContainerScalarWhereWithAggregatesInput {

    @Field(() => [ContainerScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ContainerScalarWhereWithAggregatesInput>;

    @Field(() => [ContainerScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ContainerScalarWhereWithAggregatesInput>;

    @Field(() => [ContainerScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ContainerScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    account?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    age?: IntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    url?: StringNullableWithAggregatesFilter;
}
