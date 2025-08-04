import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
  DataType,
  AllowNull,
  HasMany,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';
import { Agendamento } from '../agendamentos/entities/agendamento.model';

@Table({
  tableName: 'fcweb',
  timestamps: true, 
})
export class FcWeb extends Model<FcWeb> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.STRING(150))
  s_alerta: string;

  @Column(DataType.STRING(150))
  referencia: string;

  @Column(DataType.STRING(150))
  id_boleto: string;

  @Column(DataType.STRING(150))
  id_cancelar_bol_rem: string;

  @Column(DataType.STRING(150))
  unidade: string;

  @Column(DataType.STRING(150))
  responsavel: string;

  @AllowNull(false)
  @Column(DataType.STRING(150))
  criou_fc: string;

  @Column(DataType.STRING(150))
  andamento: string;

  @Column(DataType.STRING(150))
  prioridade: string;

  @Column(DataType.STRING(150))
  solicitacao: string;

  @Column(DataType.STRING(150))
  venda: string;

  @Column(DataType.STRING(150))
  cpf: string;

  @Column(DataType.STRING(150))
  cnpj: string;

  @Column(DataType.STRING(150))
  nome: string;

  @Column(DataType.STRING(150))
  razaosocial: string;

  @Column(DataType.DATEONLY)
  vectoboleto: Date;

  @Column(DataType.STRING(150))
  unico: string;

  @Column(DataType.STRING(150))
  contador: string;

  @Column(DataType.STRING(150))
  obscont: string;

  @Column(DataType.FLOAT)
  comissaoparceiro: number;

  @Column(DataType.STRING(10))
  scp: string;

  @Column(DataType.STRING(150))
  tipocd: string;

  @Column(DataType.STRING(150))
  valorcd: string;

  @Column(DataType.STRING(150))
  custocd: string;

  @Column(DataType.STRING(150))
  custoCdpar: string;

  @Column(DataType.STRING(150))
  estatos_pgto: string;

  @Column(DataType.STRING(100))
  pgto_efi: string;

  @Column(DataType.STRING(150))
  formapgto: string;

  @Column(DataType.STRING(150))
  vouchersoluti: string;

  @Column(DataType.STRING(150))
  ct_parcela: string;

  @Column(DataType.STRING(150))
  telefone: string;

  @Column(DataType.STRING(150))
  telefone2: string;

  @Column(DataType.STRING(150))
  email: string;

  @Column(DataType.STRING(150))
  dtnascimento: string;

  @Column(DataType.STRING(150))
  rg: string;

  @Column(DataType.STRING(150))
  cei: string;

  @Column(DataType.STRING(150))
  endereco: string;

  @Column(DataType.STRING(150))
  nrua: string;

  @Column(DataType.STRING(150))
  bairro: string;

  @Column(DataType.STRING(150))
  complemento: string;

  @Column(DataType.STRING(150))
  cep: string;

  @Column(DataType.STRING(150))
  uf: string;

  @Column(DataType.INTEGER)
  im: number;

  @Column(DataType.STRING(150))
  cidade: string;

  @Column(DataType.TEXT('long'))
  observacao: string;

  @Column(DataType.DATEONLY)
  vctoCD: Date;

  @Column(DataType.TEXT('long'))
  historico: string;

  @Column(DataType.STRING(100))
  arquivo: string;

  @Column(DataType.STRING(100))
  nomearquivo: string;

  @Column(DataType.STRING(150))
  obsrenovacao: string;

  @Column(DataType.DATEONLY)
  dt_aprovacao: Date;

  @Column(DataType.TIME)
  hr_aprovacao: string;

  @Column(DataType.FLOAT)
  comicao: number;

  @Column(DataType.STRING(150))
  validacao: string;

  @Column(DataType.STRING(150))
  nfe: string;

  @Column(DataType.TEXT)
  urlnota: string;

  @Column(DataType.STRING(11))
  id_fcw_soluti: string;

  @Column(DataType.DATEONLY)
  dt_agenda: Date;

  @Column(DataType.TIME)
  hr_agenda: string;

  @Column(DataType.STRING(150))
  obs_agenda: string;

  @Column(DataType.STRING(150))
  reg_cnh: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @Column(DataType.INTEGER)
  id_agendamento: number;

  @Column(DataType.DATE)
  dt_revogacao: Date;

  @Column(DataType.TEXT)
  linkVideo: string;

  @Column(DataType.TEXT)
  linkFoto: string;

  @Column({ type: DataType.INTEGER, defaultValue: 0 })
  notificacoes: number;

  @AllowNull(false)
  @Column(DataType.STRING(200))
  reagendamento: string;

  @HasMany(() => Agendamento)
  agendamentos: Agendamento[];
}
