// src/agendamentos/agendamentos.controller.ts

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { AgendamentosService } from './agendamentos.service';
import { CreateAgendamentoDto } from './dto/create-agendamento.dto';
import { UpdateAgendamentoDto } from './dto/update-agendamento.dto';

@Controller('agendamentos') // Define a rota base: /agendamentos
export class AgendamentosController {
  constructor(private readonly agendamentosService: AgendamentosService) {}

  @Get()
  findAll() {
    return this.agendamentosService.findAgendamentosDoDia();
  }

  @Post()
  async create(@Body() createAgendamentoDto: CreateAgendamentoDto) {
    return this.agendamentosService.create(createAgendamentoDto);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAgendamentoDto: UpdateAgendamentoDto,
  ) {
    return await this.agendamentosService.update(id, updateAgendamentoDto);
  }
}
