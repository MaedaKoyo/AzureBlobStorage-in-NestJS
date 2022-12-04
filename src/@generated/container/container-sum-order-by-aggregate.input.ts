import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ContainerSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    age?: keyof typeof SortOrder;
}
