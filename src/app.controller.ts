import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hola Mundo Cruel';
  }
  @Get('nuevo')
  newEndpoint(): string {
    return 'Yo soy un nuevo EndPoint';
  }
  @Get('/ruta/')
  nuveo(): string {
    return 'con /sas/';
  }
}
