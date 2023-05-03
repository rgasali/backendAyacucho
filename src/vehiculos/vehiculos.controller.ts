import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { VehiculosService } from './vehiculos.service';
import { Auto } from 'src/clases/auto';
import { CreateVehiculoDto } from './vehiculos.dto';


@Controller('vehiculos')
export class VehiculosController {
    constructor (private readonly vehiculoService:VehiculosService){}

@Get() 
getAutos():Auto[]{
    return this.vehiculoService.getAutos()
}

@Get(':patente')
  getVehiculoByPatente(
    @Param('patente')
    patente: string,
  ): Auto {
    return this.vehiculoService.getVehiculoByPatente(patente);
  }

@Post()
postAuto(@Body() createVehiculoDto: CreateVehiculoDto) {
  return this.vehiculoService.createVehiculo(createVehiculoDto);

}

@Delete(":patente")
  deleteVehiculo(@Param("patente") patente: string): boolean {
    return this.vehiculoService.deleteVehiculo(patente);
}
}