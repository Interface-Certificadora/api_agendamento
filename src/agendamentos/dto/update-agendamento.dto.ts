import { IsEnum, IsOptional } from 'class-validator';
import { ModalidadeType } from '../entities/agendamento.model';

export class UpdateAgendamentoDto {
  @IsOptional()
  @IsEnum([
    'VIDEO CONF',
    'VIDEO GT',
    'VIDEO APP',
    'INTERNA',
    'EXTERNA',
    'EMISAO_ONLINE',
  ])
  modalidade: ModalidadeType;
}
