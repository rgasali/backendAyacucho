import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PistaService } from 'src/services/pista/pista.service';
import { Pista } from 'src/clases/pista';

@Controller('pista')
export class PistaController {
  constructor(private readonly pistaService: PistaService) {}
  @Get()
  getPistas(): any {
    return this.pistaService.getPistas();
  }
  @Get(':id') 
  getPistaById(
    @Param('id', ParseIntPipe)
    id: number,
  ): Pista {
    return this.pistaService.getPistaById(id);
  }
}
