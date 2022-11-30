import { Injectable } from '@nestjs/common';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';
import { Web3Storage } from 'web3.storage';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class FilesService {
  
  constructor(private configService: ConfigService) {}

  create(createFileDto: CreateFileDto) {
    return 'This action adds a new file';
  }

  async findAll() {
    let client = await this._makeStorageClient();
    let fileDetailsArr = [];
    for await (const upload of client.list()) {
      fileDetailsArr.push(`${upload.name} - cid: ${upload.cid} - size: ${upload.dagSize}`);
    }
    console.log(fileDetailsArr);
    return fileDetailsArr.toString();
  }

  findOne(id: number) {
    return `This action returns a #${id} file`;
  }

  update(id: number, updateFileDto: UpdateFileDto) {
    return `This action updates a #${id} file`;
  }

  remove(id: number) {
    return `This action removes a #${id} file`;
  }

  async _makeStorageClient(): Promise<Web3Storage> {
    return new Web3Storage({ token: this.getAccessToken() })
  }

  getAccessToken(): string {
    return this.configService.get('access_token');
  }
}
