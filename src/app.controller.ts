import { Controller, Get, Ip, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Ip() ip): string {
    console.log(ip);
    return this.appService.getHello();
  }

//   @Get("all")
//   async getAllFiles(): Promise<string> {
//     let client = this.makeStorageClient();
//     for await (const upload of client.list()) {
//       console.log(`${upload.name} - cid: ${upload.cid} - size: ${upload.dagSize}`)
//     }
//     return "success";
//   }

//   @Post("upload")
//   async uploadFile(): Promise<string>{

//     return 'success';
//   }

//   makeStorageClient(): Web3Storage {
//     return new Web3Storage({ token: this.getAccessToken() })
//   }

//   getAccessToken(): string {
//     return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGViYjVEQTQ0ZGNBMTRiQ2Q0NzRlODNEOUM1QWI3MzAzMDIyZEE4ZTUiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjEyODk2NjEzMTIsIm5hbWUiOiJNeSBXaW5kb3dzIn0.A5WWOy9TsxwVq1M-nJhGOo2ZviOYh8K7q92rr50t7lM';
// }
}
