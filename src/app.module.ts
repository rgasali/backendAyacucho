import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';

import { join } from 'path';

import { AppController } from './app.controller';
import { PistaController } from './controllers/pista/pista.controller';
import { UserController } from './controllers/user/user.controller';

import { AppService } from './app.service';
import { PistaService } from './services/pista/pista.service';
import { UserService } from './services/user/user/user.service';
import { VehiculosController } from './vehiculos/vehiculos.controller';
import { VehiculosService } from './vehiculos/vehiculos.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'client') }),
  ],
  controllers: [AppController, PistaController, UserController, VehiculosController],
  providers: [AppService, PistaService, UserService, VehiculosService],
})
export class AppModule {}
