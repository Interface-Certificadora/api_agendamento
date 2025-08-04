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
import { Sequelize } from 'sequelize';
import { FcWeb } from 'src/fcweb/fcweb.model';
import { Agente } from 'src/agentes/entities/agente.model';

export type ModalidadeType =
  | 'VIDEO CONF'
  | 'VIDEO GT'
  | 'VIDEO APP'
  | 'INTERNA'
  | 'EXTERNA'
  | 'EMISAO_ONLINE';

@Table({
  tableName: 'agendamentos', 
  timestamps: false, 
})
export class Agendamento extends Model<Agendamento> {
  @PrimaryKey
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  id: number;

  @ForeignKey(() => FcWeb)
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
    field: 'id_fcweb',
  })
  idFcweb: number;

  @BelongsTo(() => FcWeb, {
    foreignKey: 'idFcweb',
    onDelete: 'CASCADE', 
  })
  fcweb: FcWeb;

  @AllowNull(false)
  @Column({
    type: DataType.DATEONLY,
    field: 'data_agendada',
  })
  dataAgendada: Date;

  @AllowNull(false)
  @Column({
    type: DataType.TIME,
    field: 'hora_agendada',
  })
  horaAgendada: string;

  @AllowNull(false)
  @Column({
    type: DataType.ENUM(
      'VIDEO CONF',
      'VIDEO GT',
      'VIDEO APP',
      'INTERNA',
      'EXTERNA',
      'EMISAO_ONLINE',
    ),
  })
  modalidade: ModalidadeType;

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
    type: DataType.DATE,
    field: 'criado_em',
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  })
  criadoEm: Date;
}
