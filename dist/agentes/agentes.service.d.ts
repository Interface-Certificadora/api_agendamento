import { Agente } from './entities/agente.model';
import { AgenteDisponivelResponse } from './dto/agente-disponivel-response.dto';
export declare class AgentesService {
    private agenteModel;
    constructor(agenteModel: typeof Agente);
    findAll(): Promise<Agente[]>;
    findDisponiveisNaProximaHora(): Promise<AgenteDisponivelResponse[]>;
    findDisponibilidadesPorAgentes(agentIds: number[], horasNoFuturo: number): Promise<any[]>;
}
