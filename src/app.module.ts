import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Url } from './database/entities/url';
import { AppController } from './url/url.controller';
import { AppService } from './url/url.service';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: +(process.env.DB_PORT || 3306),
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASS || '1234',
      database: process.env.DB_NAME || 'url_DB',
      autoLoadModels: true,
      synchronize: true,
      define: { timestamps: false },
    }),
    SequelizeModule.forFeature([Url]),
  ],
  controllers: [AppController],   // <- precisa estar aqui
  providers: [AppService],
})
export class AppModule {}