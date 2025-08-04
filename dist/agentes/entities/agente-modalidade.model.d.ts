import { Model } from 'sequelize-typescript';
import { Agente } from './agente.model';
export type ModalidadeType = 'VIDEO CONF' | 'VIDEO GT' | 'VIDEO APP' | 'INTERNA' | 'EXTERNA' | 'EMISAO_ONLINE';
export declare class AgenteModalidade extends Model<AgenteModalidade> {
    id: number;
    agenteId: number;
    agente: Agente;
    modalidade: ModalidadeType;
}
