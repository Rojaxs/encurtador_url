import { Body, Controller, Get, Headers, Param, Post, Req, Request, UseGuards } from '@nestjs/common';
import { AppService } from './url.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { JwtService } from '@nestjs/jwt';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private readonly jwtService : JwtService
  ) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body () { url }, @Req() req) {
    const userId = req.user.sub
    return this.appService.create(url, userId);
  }

  @Get("/:hash")
  get(@Param () { hash }) {
    return this.appService.get(hash);
  }
}
