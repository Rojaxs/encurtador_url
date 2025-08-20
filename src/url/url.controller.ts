import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './url.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  create(@Body () { url }) {
    return this.appService.create(url);
  }

  @Get("/:hash")
  get(@Param () { hash }) {
    return this.appService.get(hash);
  }
}
