import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module, MiddlewareConsumer } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import graphqlUploadExpress from "graphql-upload/graphqlUploadExpress.js";

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { ContainerModule } from './container/container.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.graphql',
      installSubscriptionHandlers: true,
    }),
    ContainerModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})

export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(graphqlUploadExpress).forRoutes("graphql");
  }
}
