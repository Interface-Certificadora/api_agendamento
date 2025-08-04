import {
  IsInt,
  IsString,
  IsDateString,
  IsEnum,
  IsNotEmpty,
} from 'class-validator';
import { ModalidadeType } from '../entities/agendamento.model';

export class CreateAgendamentoDto {
  @IsInt()
  @IsNotEmpty()
  idFcweb: number;

  @IsDateString()
  @IsNotEmpty()
  dataAgendada: string;

  @IsString()
  @IsNotEmpty()
  horaAgendada: string; 

  // @IsEnum([
  //   'VIDEO CONF',
  //   'VIDEO GT',
  //   'VIDEO APP',
  //   'INTERNA',
  //   'EXTERNA',
  //   'EMISAO_ONLINE',
  // ])
  // @IsNotEmpty()
  // modalidade: ModalidadeType;

  @IsInt()
  @IsNotEmpty()
  agenteId: number;
}
