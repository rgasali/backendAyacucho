import { Injectable } from '@nestjs/common';
import { Usuario } from 'src/clases/usuario';
import * as fs from 'fs';

@Injectable()
export class UserService {
  getUsuarios(url: string): Usuario[] {
    const usuarios = [];
    const datos = fs.readFileSync(url, 'utf-8');
    const renglon = datos.split('\r\n');
    for (const linea of renglon) {
      const partes = linea.split(',');
      const usuario = new Usuario(
        partes[0],
        partes[1],
        partes[2],
        Number(partes[3]),
      );
      usuarios.push(usuario);
    }
    return usuarios;
  }
}
