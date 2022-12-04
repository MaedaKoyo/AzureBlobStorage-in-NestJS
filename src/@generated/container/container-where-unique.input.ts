import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ContainerWhereUniqueInput {

    @Field(() => String, {nullable:true})
    account?: string;
}
