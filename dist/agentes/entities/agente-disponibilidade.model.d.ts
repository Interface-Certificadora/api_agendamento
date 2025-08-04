import { Model } from 'sequelize-typescript';
import { Agente } from './agente.model';
export type DiaSemanaType = 'SEG' | 'TER' | 'QUA' | 'QUI' | 'SEX' | 'SAB' | 'DOM';
export declare class AgenteDisponibilidade extends Model<AgenteDisponibilidade> {
    id: number;
    agenteId: number;
    agente: Agente;
    diaSemana: DiaSemanaType;
    hora: string;
    disponivel: boolean;
}
