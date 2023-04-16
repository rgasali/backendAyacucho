import { Body, Controller, Get, Post } from '@nestjs/common';
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

@Post()
postAuto(@Body() createVehiculoDto: CreateVehiculoDto) {
  return this.vehiculoService.createVehiculo(createVehiculoDto);

}
}
