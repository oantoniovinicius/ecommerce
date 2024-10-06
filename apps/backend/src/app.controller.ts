import { Controller, Get } from '@nestjs/common';


@Controller()
export class AppController {

  @Get("ping")
  ping(): string {
    return "pong" //load balance checa se esse servico esta funcionando
  } 
}
