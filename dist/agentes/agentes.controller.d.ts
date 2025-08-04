import { AgentesService } from './agentes.service';
export declare class AgentesController {
    private readonly agentesService;
    constructor(agentesService: AgentesService);
    findAll(): Promise<import("./entities/agente.model").Agente[]>;
    findDisponiveisNaProximaHora(): Promise<import("./dto/agente-disponivel-response.dto").AgenteDisponivelResponse[]>;
}
