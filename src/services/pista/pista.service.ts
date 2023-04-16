import { Injectable, NotFoundException } from '@nestjs/common';
import { Pista } from 'src/clases/pista';
import { AppService } from 'src/app.service';

@Injectable()
export class PistaService {
  private Pistas: Pista[] = [];

  //crea las pistas.
  constructor(private readonly appService: AppService) {
    for (let i = 0; i < 20; i++) {
      const pista = new Pista(
        i,
        'N' + this.appService.getRandomString(),
        360,
        'I' + this.appService.getRandomString(),
        i + 1990,
      );

      this.Pistas.push(pista);
    }
  }

  //devuelve las pistas
  getPistas(): Pista[] {
    return this.Pistas;
  }

  getPistaById(id: number): Pista {
    const pista = this.Pistas.find((pista) => pista.id === id);

    if (!pista) {
      // devolver una exception si no encuentra la pista
      throw new NotFoundException();
    }

    return pista;
  }

  //crear pista
  newPista(
    nombre: string,
    duracion: number,
    interprete: string,
    lanzamiento: number,
  ) {
    const id = this.Pistas.length;
    const newPista = new Pista(id, nombre, duracion, interprete, lanzamiento);

    this.Pistas.push(newPista);
  }

  //borrar pista por id
  deletePistaById(id: number) {
    const indicePista = this.Pistas.findIndex((elemento) => {

      return elemento.id === id;

    });

    if (indicePista===-1) {
      // devolver una exception si no encuentra la pista
      throw new NotFoundException();
    }

    this.Pistas.splice(indicePista, 1);

   
  }
}
