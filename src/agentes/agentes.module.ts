import { Module } from '@nestjs/common';
import { AgentesService } from './agentes.service';
import { AgentesController } from './agentes.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Agente } from './entities/agente.model';
import { AgenteDisponibilidade } from './entities/agente-disponibilidade.model';
import { AgenteModalidade } from './entities/agente-modalidade.model';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Agente,
      AgenteDisponibilidade,
      AgenteModalidade,
    ]),
  ],
  controllers: [AgentesController],
  providers: [AgentesService],
  exports: [AgentesService],
})
export class AgentesModule {}
