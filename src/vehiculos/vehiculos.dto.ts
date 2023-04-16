import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateVehiculoDto{
    @IsString()
    @IsNotEmpty()
    readonly tipo:string;

    @IsString()
    @IsNotEmpty()
    readonly marca:string;

    @IsString()
    @IsNotEmpty()
    readonly patente:string;

    @IsString()
    @IsNotEmpty()
    readonly modelo:string;
    
    @IsNumber()
    readonly anio:number;

    @IsNumber()
    readonly precio:number;

    
}