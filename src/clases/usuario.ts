export class Usuario{
   mail:string;
   nombre:string;
   apellido:string;
   plan:number;

    constructor(mail:string,
        nombre:string,
        apellido:string,
        plan:number)
    {   this.mail=mail;
        this.nombre=nombre;
        this.apellido=apellido;
        this.plan=plan;
    }   
}