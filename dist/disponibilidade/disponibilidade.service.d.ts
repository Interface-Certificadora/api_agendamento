import { AgendamentosService } from '../agendamentos/agendamentos.service';
import { AgentesService } from '../agentes/agentes.service';
export declare class DisponibilidadeService {
    private readonly agentesService;
    private readonly agendamentosService;
    constructor(agentesService: AgentesService, agendamentosService: AgendamentosService);
    findHorariosLivres(agentIds: number[]): Promise<any[]>;
}
