export class Pista {
  id: number;
  cancion: string;
  duracion: number;
  interprete: string;
  lanzamiento: number;
  constructor(
    id: number,
    cancion: string,
    duracion: number,
    interprete: string,
    lanzamiento: number,
  ) {
    this.id = id;
    this.cancion = cancion;
    this.duracion = duracion;
    this.interprete = interprete;
    this.lanzamiento = lanzamiento;
  }
}
