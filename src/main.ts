import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TasksService } from "./tasks/tasks.service";

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  // await app.listen(3000);
  // console.log(`Application is running on: ${await app.getUrl()}`);
  const app = await NestFactory.createApplicationContext(AppModule);
  const tasksService = app.get(TasksService);
  await app.close();
}
bootstrap();
