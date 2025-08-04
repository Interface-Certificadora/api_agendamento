import { AgendamentosService } from './agendamentos.service';
import { CreateAgendamentoDto } from './dto/create-agendamento.dto';
import { UpdateAgendamentoDto } from './dto/update-agendamento.dto';
export declare class AgendamentosController {
    private readonly agendamentosService;
    constructor(agendamentosService: AgendamentosService);
    findAll(): Promise<import("./entities/agendamento.model").Agendamento[]>;
    create(createAgendamentoDto: CreateAgendamentoDto): Promise<import("./entities/agendamento.model").Agendamento>;
    update(id: number, updateAgendamentoDto: UpdateAgendamentoDto): Promise<import("./entities/agendamento.model").Agendamento>;
}
