import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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

@Put(":patente")
putAuto(@Body()auto: CreateVehiculoDto, @Param('patente') patente: string) :string {
  return this.vehiculoService.updateAuto(auto, patente);
}



@Delete(":patente")
  deleteVehiculo(@Param("patente") patente: string): boolean {
    return this.vehiculoService.deleteVehiculo(patente);
}
}