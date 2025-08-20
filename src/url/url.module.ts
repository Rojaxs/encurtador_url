import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Url } from 'src/database/entities/url';

@Module({
  imports: [SequelizeModule.forFeature([Url])],
  exports: [SequelizeModule],
})
export class UrlModule {}