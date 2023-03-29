import { Controller, Get } from '@nestjs/common';

import { AppService } from 'src/app.service';

@Controller('pistas')
export class PistasController {
  constructor(private readonly appService: AppService) {}  

 
  @Get()
   async getJsonMock():Promise<any> {
    try{
      const lista=await this.appService.getDataPistas();
      return lista;
    }catch(err){
      console.log(err)
    }
    }
       
}
