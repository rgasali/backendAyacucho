/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getDataPistas():Promise<any[]>{
    const lista=[]
     fetch('../../client/json/pistas.json')
    .then((response)=>response.json())
    .then((data)=>{
      data.tracks.forEach((element) => {
        lista.push(element);
      });
    })
    return lista
  }
}
