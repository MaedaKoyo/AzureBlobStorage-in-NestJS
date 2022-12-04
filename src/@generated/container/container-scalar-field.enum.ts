import { registerEnumType } from '@nestjs/graphql';

export enum ContainerScalarFieldEnum {
    account = "account",
    name = "name",
    age = "age",
    url = "url"
}


registerEnumType(ContainerScalarFieldEnum, { name: 'ContainerScalarFieldEnum', description: undefined })
