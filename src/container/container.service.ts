import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Container } from 'src/@generated/container/container.model';
import { PrismaService } from 'src/prisma.service';
import { BlobServiceClient } from '@azure/storage-blob';

import { FindManyContainerArgs } from 'src/@generated/container/find-many-container.args'; 
import { CreateOneContainerArgs } from 'src/@generated/container/create-one-container.args'; 
import { FindUniqueContainerArgs } from 'src/@generated/container/find-unique-container.args';
import path from 'path'


@Injectable()
export class ContainerService {
    constructor(private readonly prisma: PrismaService) {}
    readonly AZURE_STORAGE_CONNECTION_STRING = process.env.AZURE_STORAGE_CONNECTION_STRING
    //private test: Test[] = []


    //select multi (test) ======================================
    async findMany( args: FindManyContainerArgs ): Promise<Container[] | null> {
        return this.prisma.container.findMany(args)
    }

    //select unique user ======================================
    async findUser(args: FindUniqueContainerArgs): Promise<Container> {
        return this.prisma.container.findUnique(args)
    }

    //create container and insert to DB ========================
    async createContainer( args: CreateOneContainerArgs ): Promise<Container | null> {

        console.log(args.data.name)

        //TODO:
        //inspection container name
        //https://learn.microsoft.com/ja-jp/rest/api/storageservices/naming-and-referencing-containers--blobs--and-metadata


        // Create the BlobServiceClient object which will be used to create a container client
        const blobServiceClient = BlobServiceClient.fromConnectionString(
            this.AZURE_STORAGE_CONNECTION_STRING
        );
        console.log("\nCreating container...")

        // Get a reference to a container
        const containerClient = blobServiceClient.getContainerClient(args.data.name)

        // Create the container
        const createContainerResponse = await containerClient.create()
        console.log(
            `Container was created successfully.
            \n\trequestId:${createContainerResponse.requestId}
            \n\tURL: ${containerClient.url}`
        )

        //insert to DB
        args.data.url = containerClient.url
        const newContainer = this.prisma.container.create(args)

        return newContainer
    }

    //upload file to Azure Storage ============================
    async uploadFile(file: Express.Multer.File, containerName: string){
        console.log(file)
        console.log(file.originalname)
        console.log(containerName)

        const fileName: string = file.originalname
        const imageExtensions: string[] = [
            "apng","avif","gif","jpeg",
            "jpg","png","tif","tiff","webp"
        ]

        //check extension
        const extension = fileName.split('.').pop()
        const result: number = imageExtensions.indexOf(extension)
        if (result == -1) {
            throw new HttpException(
                {
                  status: HttpStatus.NOT_FOUND,
                  error: "This is not image file"
                },
                404
            );
        }

        //get blob client
        const blobClientService = BlobServiceClient.fromConnectionString(this.AZURE_STORAGE_CONNECTION_STRING);
        const containerClient = blobClientService.getContainerClient(containerName);
    
        const blobClient = containerClient.getBlockBlobClient(file.originalname);
        // //upload file
        blobClient.uploadData(file.buffer)

        return
    }
}
