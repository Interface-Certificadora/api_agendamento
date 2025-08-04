import { Model } from 'sequelize-typescript';
import { Agendamento } from '../../agendamentos/entities/agendamento.model';
import { AgenteDisponibilidade } from './agente-disponibilidade.model';
import { AgenteModalidade } from './agente-modalidade.model';
export declare class Agente extends Model<Agente> {
    id: number;
    nome: string;
    ativo: boolean;
    agendamentos: Agendamento[];
    disponibilidades: AgenteDisponibilidade[];
    modalidades: AgenteModalidade[];
}
