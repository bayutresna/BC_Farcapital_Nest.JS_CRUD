import { Controller, Get, Render } from '@nestjs/common';
// import { AppService } from './app.service';

@Controller()
export class AppController {
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  // @Get()
  // @Render('index')
  // root() {
  //   return {message: 'Naga bonar'};
  // }
}
