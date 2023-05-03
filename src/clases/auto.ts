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
    }}
