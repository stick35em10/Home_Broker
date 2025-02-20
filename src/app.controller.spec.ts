import { Test, TestingModule }  from '@nestjs/testing';
import { AppController }        from './app.controller';
import { AppService }           from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Ao Pai agradou darvos o reino! Busca o Reino e a sua Justica e tudo o resto lhe sera acrescentado!');
    });
  });
});
