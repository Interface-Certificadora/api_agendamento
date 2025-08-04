import { Agendamento } from './entities/agendamento.model';
export declare class AgendamentosService {
    private agendamentoModel;
    constructor(agendamentoModel: typeof Agendamento);
    findAgendamentosDoDia(data?: Date): Promise<Agendamento[]>;
    create(createAgendamentoDto: any): Promise<Agendamento>;
    update(id: number, updateAgendamentoDto: any): Promise<Agendamento>;
}
