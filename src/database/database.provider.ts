
import { Sequelize } from 'sequelize-typescript';
import { Url } from './entities/url';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '1234',
        database: 'url_DB',
        models: [Url],
        define: { timestamps: false },
        timezone: '-03:00'
      });
      sequelize.addModels([Url]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
