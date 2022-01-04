import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import * as cookieParser from 'cookie-parser';

import { AppModule } from './app.module';
import { authConstants } from './app.constants';

// TODO: 抽离到配置文件，区分开发和线上环境
const PORT = 8000;
const PREFIX = '/api/me';
const ENV = 'dev';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(PREFIX);

  app.use(cookieParser(authConstants.secret));

  app.use(
    session({
      secret: authConstants.secret,
      resave: false,
      saveUninitialized: false,
    }),
  );

  await app.listen(PORT, () => {
    const serv = `http://::1:${PORT}${PREFIX}`;
    console.info(`Server is running on ${serv} in ${ENV}.`);
  });
}
bootstrap();
