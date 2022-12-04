import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Container } from 'src/@generated/container/container.model';
import { ContainerService } from './container.service';

import { FindManyContainerArgs } from 'src/@generated/container/find-many-container.args';
import { FindUniqueContainerArgs } from 'src/@generated/container/find-unique-container.args';
import { CreateOneContainerArgs } from 'src/@generated/container/create-one-container.args';


@Resolver(() => Container)
export class ContainerResolver {
  constructor(private readonly containerService: ContainerService) {}

  //select multi (test)
  @Query(() => [Container])
  readAll(@Args() args: FindManyContainerArgs) {
    return this.containerService.findMany(args);
  }

  //select unique user
  @Query(() => Container)
  async findUser(@Args() args: FindUniqueContainerArgs) {
    return this.containerService.findUser(args);
  }

  //create container and insert to DB
  @Mutation(() => Container)
  createContainer(@Args() args: CreateOneContainerArgs) {
    return this.containerService.createContainer(args);
  }


  // @Mutation(() => Boolean)
  //   async uploadFile(@Args({name: 'file', type: () => GraphQLUpload})
  //   {
  //       createReadStream,
  //       filename
  //   }: FileUpload): Promise<boolean> {
  //       return new Promise(async (resolve, reject) => 
  //           createReadStream()
  //               .pipe(createWriteStream(`./uploads/${filename}`))
  //               .on('finish', () => resolve(true))
  //               .on('error', () => reject(false))
  //       );
  // }

  // @Mutation(() => Boolean)
  // async uploadProfileImage(@Args({ name: "file", type: () => GraphQLUpload }) file: FileUpload) {
  //   console.log(file);
  // }
}

