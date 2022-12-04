import { Module } from '@nestjs/common';
import { ContainerService } from './container.service';
import { ContainerResolver } from './container.resolver';
import { PrismaService } from 'src/prisma.service';
import { ContainerController } from './container.controller';

@Module({
  providers: [ContainerService, ContainerResolver, PrismaService],
  exports: [ContainerService],
  controllers: [ContainerController],
})
export class ContainerModule {}
