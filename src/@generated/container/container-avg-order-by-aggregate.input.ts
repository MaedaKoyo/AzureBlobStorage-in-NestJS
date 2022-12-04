import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ContainerAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    age?: keyof typeof SortOrder;
}
