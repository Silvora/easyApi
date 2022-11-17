import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { PathModule } from './path/path.module';

@Module({
  imports: [ApiModule, PathModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
