export class Pista{
    id:number;
    cancion:string;
    duracion:number;
    interprete:string;
    constructor(id:number,
        cancion:string,
        duracion:number,
        interprete:string)
    {   this.id =id;
        this.cancion =cancion;
        this.duracion =duracion;
        this.interprete =interprete;
    }   
}