import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
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

  @Post()
  postPista(@Body() body: any) {
    // crear una nueva pista y hacer push

    console.log(body);

    const { nombre, duracion, interprete, lanzamiento } = body;

    this.pistaService.newPista(nombre, duracion, interprete, lanzamiento);

    return { body };
  }

  @Delete(':id')
  deletePistaById(@Param('id', ParseIntPipe) id: number){
    return this.pistaService.deletePistaById(id);
  }
}
