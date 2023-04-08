import { Injectable } from '@nestjs/common';
import { Usuario } from 'src/clases/usuario';
import * as fs from 'fs';

@Injectable()
export class UserService {
  getUsuarios(url: string): Usuario[] {
    const usuarios = [];
    let datos = fs.readFileSync(url, 'utf-8');
    let renglon = datos.split('\r\n');
    for (let linea of renglon) {
      let partes = linea.split(',');
      let usuario = new Usuario(
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
