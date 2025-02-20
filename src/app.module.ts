import { Module }         from '@nestjs/common';
import { AssetsModule } from './assets/assets.module';
import { AppController }  from './app.controller';
import { AppService }     from './app.service';


@Module({
  controllers:  [AppController],
  providers:    [AppService],
  imports: [AssetsModule],
})
export class AppModule {}
