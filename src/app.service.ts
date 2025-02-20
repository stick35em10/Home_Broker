import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'modified:   src/app.service.ts, ! Ao Pai agradou darvos o reino! Busca o Reino e a sua Justica e tudo o resto lhe sera acrescentado!';
  }
}
