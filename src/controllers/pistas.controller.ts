import { Controller, Get } from '@nestjs/common';
import { PistaService } from 'src/services/pista/pista.service';

@Controller('pistas')
export class PistasController {
  constructor(private readonly pistaservice: PistaService) {}

  @Get()
  /*  getDataPistas(): any {
    
    return this.appService.getDataPistas();
  } */

  //getPistas lo utilizo para crear dinamicamente el listado de pistas
  getPistas(): any {
    return this.pistaservice.getPistas()
}
}