// src/disponibilidade/disponibilidade.module.ts

import { Module } from '@nestjs/common';
import { DisponibilidadeService } from './disponibilidade.service';
import { DisponibilidadeController } from './disponibilidade.controller';
import { AgentesModule } from '../agentes/agentes.module'; 
import { AgendamentosModule } from '../agendamentos/agendamentos.module'; 

@Module({
  imports: [AgentesModule, AgendamentosModule],
  controllers: [DisponibilidadeController],
  providers: [DisponibilidadeService],
})
export class DisponibilidadeModule {}
