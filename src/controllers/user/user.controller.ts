import { Controller, Get } from '@nestjs/common';
import { Usuario } from 'src/clases/usuario';
import { UserService } from 'src/services/user/user/user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userservice: UserService) {}

  @Get()
  getUsuarios(): Usuario[] {
    return this.userservice.getUsuarios('./src/controllers/user/user.txt');
  }
}
