import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.controller';
import { ConfigModule } from '@nestjs/config';
import configuration from '../../config/configuration';

@Module({
  controllers: [FilesController],
  providers: [FilesService]
})
export class FilesModule { }
