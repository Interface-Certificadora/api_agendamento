import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
  ForeignKey,
  BelongsTo,
  AllowNull,
} from 'sequelize-typescript';
import { Agente } from './agente.model';

export type DiaSemanaType =
  | 'SEG'
  | 'TER'
  | 'QUA'
  | 'QUI'
  | 'SEX'
  | 'SAB'
  | 'DOM';

@Table({
  tableName: 'agente_disponibilidade',
  timestamps: false,
})
export class AgenteDisponibilidade extends Model<AgenteDisponibilidade> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  id: number;

  @ForeignKey(() => Agente)
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'agente_id',
  })
  agenteId: number;

  @BelongsTo(() => Agente, {
    foreignKey: 'agenteId',
    onDelete: 'CASCADE',
  })
  agente: Agente;

  @AllowNull(false)
  @Column({
    type: DataType.ENUM('SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB', 'DOM'),
    field: 'dia_semana',
  })
  diaSemana: DiaSemanaType;

  @AllowNull(false)
  @Column({
    type: DataType.TIME,
  })
  hora: string;

  @AllowNull(false)
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  disponivel: boolean;
}
