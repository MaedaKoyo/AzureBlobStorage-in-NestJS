import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';
import { Int } from '@nestjs/graphql';

@InputType()
export class ContainerCreateInput {

    @Field(() => String, {nullable:false})
    account!: string;

    @Field(() => String, {nullable:false})
    @Validator.IsNotEmpty()
    @Validator.NotContains('_', {message: 'can not use _'})
    name!: string;

    @Field(() => Int, {nullable:false})
    age!: number;

    @Field(() => String, {nullable:true})
    url?: string;
}
