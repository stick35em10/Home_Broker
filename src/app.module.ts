import { Module }         from '@nestjs/common';
import { AssetsModule }   from './assets/assets.module';
import { AppController }  from './app.controller';
import { AppService }     from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({//mongodb://root:root@localhost:27017/nest?authSource=admin&directConnection=true
  imports:      [
    MongooseModule.forRoot(
      'mongodb://root:root@localhost:27017/nest?authSource=admin&directConnection=true'
      ), 
      AssetsModule,
  ],
  controllers:  [AppController],
  providers:    [AppService],
  
})

export class AppModule {}
//REST -  recursos