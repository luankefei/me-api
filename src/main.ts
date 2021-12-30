import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// TODO: 抽离到配置文件，区分开发和线上环境
const PORT = 8000;
const PREFIX = '/api/me';
const ENV = 'dev';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(PREFIX);

  await app.listen(PORT, () => {
    const serv = `http://::1:${PORT}${PREFIX}`;
    console.info(`Server is running on ${serv} in ${ENV}.`);
  });
}
bootstrap();
