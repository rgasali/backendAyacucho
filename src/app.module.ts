import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';

import { join } from 'path';

import { AppController } from './app.controller';
import { PistasController } from './controllers/pistas.controller';
import { PistaController } from './controllers/pista/pista.controller';
import { UserController } from './controllers/user/user.controller';

import { AppService } from './app.service';
import { PistaService } from './services/pista/pista.service';
import { UserService } from './services/user/user/user.service';


@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'client') }),
  ],
  controllers: [
    AppController,
    PistasController,
    PistaController,
    UserController,
  ],
  providers: [AppService, PistaService, UserService],
})
export class AppModule {}
