import { Body, Controller, Get, Param, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AppService } from './url.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
  ) {}

  @UseGuards(AuthGuard)
  @Post()
  async create(@Body () { url }, @Req() req) {
    const userId = req.user.sub
    return this.appService.create(url, userId);
  }

  @UseGuards(AuthGuard)
  @Get("/analytics")
  async analytics() {
    return await this.appService.analytics()
  }

  @Get("/:hash")
  async get(@Param () { hash }, @Res () res ) {
    const url =  await this.appService.get(hash);
    return res.redirect(url)
  }
}
