
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AgendamentosService } from './agendamentos.service';
import { AgendamentosController } from './agendamentos.controller';
import { Agendamento } from './entities/agendamento.model';

@Module({
  imports: [SequelizeModule.forFeature([Agendamento])],
  controllers: [AgendamentosController],
  providers: [AgendamentosService],
  exports: [AgendamentosService], 
})
export class AgendamentosModule {}