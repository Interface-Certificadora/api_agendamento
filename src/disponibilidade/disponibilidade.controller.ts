// src/disponibilidade/disponibilidade.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { DisponibilidadeService } from './disponibilidade.service';
import { FindDisponibilidadeDto } from './dto/find-disponibilidade.dto'; // 1. Importe o DTO

@Controller('disponibilidade')
export class DisponibilidadeController {
  constructor(
    private readonly disponibilidadeService: DisponibilidadeService,
  ) {}

  @Post('horarios-livres')
  findDisponibilidadeReal(
    @Body() findDisponibilidadeDto: FindDisponibilidadeDto,
  ) {
    return this.disponibilidadeService.findHorariosLivres(
      findDisponibilidadeDto.agentIds,
    );
  }
}
