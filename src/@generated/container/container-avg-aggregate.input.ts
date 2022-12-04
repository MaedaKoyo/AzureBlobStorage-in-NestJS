import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ContainerAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    age?: true;
}
