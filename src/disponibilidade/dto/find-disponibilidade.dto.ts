import { IsArray, ArrayNotEmpty, IsInt } from 'class-validator';

export class FindDisponibilidadeDto {
  @IsArray({ message: 'agentIds deve ser um array.' })
  @ArrayNotEmpty({ message: 'agentIds não pode ser um array vazio.' })
  @IsInt({
    each: true,
    message: 'Cada item em agentIds deve ser um número inteiro.',
  })
  agentIds: number[];
}
