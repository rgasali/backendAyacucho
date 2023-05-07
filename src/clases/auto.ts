export class Auto{
    tipo:string;
    marca:string;
    patente:string;
    modelo:string;
    anio:number;
    precio:number;
    constructor(
        tipo:string,
        marca:string,
        patente:string,
        modelo:string, 
        anio:number,
        precio:number)
    {   
        this.tipo=tipo;
        this.marca=marca;
        this.patente=patente;
        this.modelo=modelo; 
        this.anio=anio;
        this.precio=precio;
    }

    toString(){
    return `${this.tipo},${this.marca},${this.patente},${this.modelo},${this.anio},${this.precio}`;
    }

    setTipo(nuevoTipo: string): void {
      this.tipo = nuevoTipo;
    }

    setMarca(nuevoMarca: string): void {
        this.marca = nuevoMarca;
    }

    setPatente(nuevoPatente: string): void {
      this.patente = nuevoPatente;
    }

    setModelo(nuevoModelo: string): void {
      this.modelo = nuevoModelo;
    }

    setAnio(nuevoAnio: number): void {
      this.anio = nuevoAnio;
    }

    setPrecio(nuevoPrecio: number): void {
      this.precio = nuevoPrecio;
    }


}
