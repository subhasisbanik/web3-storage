import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilesController } from './files/files.controller';
import { FilesModule } from './files/files.module';
import { FilesService } from './files/files.service';
import { ConfigModule } from '@nestjs/config';
import configuration from '../config/configuration';

@Module({
  imports: [FilesModule, ConfigModule.forRoot({
    load: [configuration],
    isGlobal: true,
  })],
  controllers: [AppController, FilesController],
  providers: [AppService, FilesService],
})
export class AppModule {}
