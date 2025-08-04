import { Model } from 'sequelize-typescript';
import { FcWeb } from 'src/fcweb/fcweb.model';
import { Agente } from 'src/agentes/entities/agente.model';
export type ModalidadeType = 'VIDEO CONF' | 'VIDEO GT' | 'VIDEO APP' | 'INTERNA' | 'EXTERNA' | 'EMISAO_ONLINE';
export declare class Agendamento extends Model<Agendamento> {
    id: number;
    idFcweb: number;
    fcweb: FcWeb;
    dataAgendada: Date;
    horaAgendada: string;
    modalidade: ModalidadeType;
    agenteId: number;
    agente: Agente;
    criadoEm: Date;
}
