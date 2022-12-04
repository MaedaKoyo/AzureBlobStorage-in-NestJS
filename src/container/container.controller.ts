import { Controller, Param, Patch, UploadedFile, UseInterceptors } from '@nestjs/common';
import { ContainerService } from './container.service';
import { Express } from 'express'; 
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('container')
export class ContainerController {
    constructor(private readonly containerService: ContainerService) {}

    //upload file to Azure Storage
    @Patch('/:name')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file: Express.Multer.File, @Param('name') containerName: string) {
        return this.containerService.uploadFile(file, containerName)
    }
}
