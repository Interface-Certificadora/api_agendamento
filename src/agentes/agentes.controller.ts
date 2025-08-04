import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AgentesService } from './agentes.service';

@Controller('agentes')
export class AgentesController {
  constructor(private readonly agentesService: AgentesService) {}

  @Get()
  findAll() {
    return this.agentesService.findAll();
  }

  @Get('disponibilidade')
  async findDisponiveisNaProximaHora() {
    return await this.agentesService.findDisponiveisNaProximaHora();
  }
}
