import { Auto } from "./auto";

export class Camioneta extends Auto{
    carga:number;
    constructor(
        tipo:string,
        marca:string,
        patente:string,
        modelo:string, 
        anio:number,
        precio:number,
        carga:number)
    {   
        super(tipo,marca,patente,modelo,anio,precio)
         this.carga=carga;
    }
}