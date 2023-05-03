import { Injectable, NotFoundException } from '@nestjs/common';
import * as fs from "fs";
import { Auto } from 'src/clases/auto';
import { Camioneta } from 'src/clases/camioneta';
import { CreateVehiculoDto } from './vehiculos.dto';

@Injectable()
export class VehiculosService {
    //private camionetas:Camioneta[] =[];
    private autos:Auto[]=[];
    private url:string= './src/vehiculos/vehiculos.txt'

    constructor() {
        const datos = fs.readFileSync(this.url, "utf-8");
    
    
        if (datos.length) {
            const renglon = datos.split("\r\n");
      
            for (let linea of renglon) {
              let partes = linea.split(",");
              let auto = new Auto(
                partes[0],
                partes[1],
                partes[2],
                partes[3],
                parseInt(partes[4]),
                parseInt(partes[5])
              );
                console.log(auto)
              this.autos.push(auto);
            }
          }
    
    } 
       
    getAutos():Auto[]{
        return this.autos;
    }

    getVehiculoByPatente(patente: string): Auto {
      const auto = this.autos.find((auto) => auto.patente === patente);
  
      if (!auto) {
        // devolver una exception si no encuentra la pista
        throw new NotFoundException();
      }
  
      return auto;
    }

    createVehiculo(CreateVehiculoDto: CreateVehiculoDto) {
        const newAuto: Auto = new Auto(
          CreateVehiculoDto.tipo,
          CreateVehiculoDto.marca,
          CreateVehiculoDto.patente,
          CreateVehiculoDto.modelo,
          CreateVehiculoDto.anio,
          CreateVehiculoDto.precio
        );
    
        const dataAppend = this.autos.length
          ? "\n" + newAuto.toString()
          : newAuto.toString();
    
        this.autos.push(newAuto);
    
        fs.appendFileSync(this.url, dataAppend);
      }


      deleteVehiculo(patente: string): boolean {
        const pos = this.autos.findIndex((e) => {
          return e.patente == patente;
        });
    
        if (pos != -1) {
          this.autos.splice(pos, 1);
          return true;
        }
    
        return false;
      }
    }

