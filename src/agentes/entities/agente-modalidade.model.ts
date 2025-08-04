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

export type ModalidadeType =
  | 'VIDEO CONF'
  | 'VIDEO GT'
  | 'VIDEO APP'
  | 'INTERNA'
  | 'EXTERNA'
  | 'EMISAO_ONLINE';

@Table({
  tableName: 'agente_modalidade',
  timestamps: false, 
})
export class AgenteModalidade extends Model<AgenteModalidade> {
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
}
