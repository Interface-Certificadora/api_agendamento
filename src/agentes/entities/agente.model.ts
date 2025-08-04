import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
  HasMany,
  AllowNull,
} from 'sequelize-typescript';
import { Agendamento } from '../../agendamentos/entities/agendamento.model';
import { AgenteDisponibilidade } from './agente-disponibilidade.model';
import { AgenteModalidade } from './agente-modalidade.model';

@Table({
  tableName: 'agentes',
  timestamps: false, 
})
export class Agente extends Model<Agente> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  id: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING(100),
  })
  nome: string;

  @AllowNull(false) 
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true, 
  })
  ativo: boolean;


  @HasMany(() => Agendamento)
  agendamentos: Agendamento[];

  @HasMany(() => AgenteDisponibilidade)
  disponibilidades: AgenteDisponibilidade[];

  @HasMany(() => AgenteModalidade)
  modalidades: AgenteModalidade[];
}
