import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class ContainerAvgAggregate {

    @Field(() => Float, {nullable:true})
    age?: number;
}
