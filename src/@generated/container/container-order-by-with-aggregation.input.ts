import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ContainerCountOrderByAggregateInput } from './container-count-order-by-aggregate.input';
import { ContainerAvgOrderByAggregateInput } from './container-avg-order-by-aggregate.input';
import { ContainerMaxOrderByAggregateInput } from './container-max-order-by-aggregate.input';
import { ContainerMinOrderByAggregateInput } from './container-min-order-by-aggregate.input';
import { ContainerSumOrderByAggregateInput } from './container-sum-order-by-aggregate.input';

@InputType()
export class ContainerOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    account?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    age?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    url?: keyof typeof SortOrder;

    @Field(() => ContainerCountOrderByAggregateInput, {nullable:true})
    _count?: ContainerCountOrderByAggregateInput;

    @Field(() => ContainerAvgOrderByAggregateInput, {nullable:true})
    _avg?: ContainerAvgOrderByAggregateInput;

    @Field(() => ContainerMaxOrderByAggregateInput, {nullable:true})
    _max?: ContainerMaxOrderByAggregateInput;

    @Field(() => ContainerMinOrderByAggregateInput, {nullable:true})
    _min?: ContainerMinOrderByAggregateInput;

    @Field(() => ContainerSumOrderByAggregateInput, {nullable:true})
    _sum?: ContainerSumOrderByAggregateInput;
}
