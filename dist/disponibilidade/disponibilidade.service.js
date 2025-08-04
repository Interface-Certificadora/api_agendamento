"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisponibilidadeService = void 0;
const common_1 = require("@nestjs/common");
const agendamentos_service_1 = require("../agendamentos/agendamentos.service");
const agentes_service_1 = require("../agentes/agentes.service");
let DisponibilidadeService = class DisponibilidadeService {
    constructor(agentesService, agendamentosService) {
        this.agentesService = agentesService;
        this.agendamentosService = agendamentosService;
    }
    async findHorariosLivres(agentIds) {
        const agentesDisponiveis = await this.agentesService.findDisponibilidadesPorAgentes(agentIds, 2);
        const agendamentosDoDia = await this.agendamentosService.findAgendamentosDoDia();
        const horariosOcupados = new Set();
        agendamentosDoDia.forEach((agendamento) => {
            const chave = `${agendamento.agenteId}-${agendamento.horaAgendada}`;
            horariosOcupados.add(chave);
        });
        const agentesComHorariosReais = agentesDisponiveis
            .map((agente) => {
            const disponibilidadesReais = agente.disponibilidades.filter((disp) => {
                const chave = `${agente.id}-${disp.hora}`;
                return !horariosOcupados.has(chave);
            });
            return {
                ...agente,
                disponibilidades: disponibilidadesReais,
            };
        })
            .filter((agente) => agente.disponibilidades.length > 0);
        return agentesComHorariosReais;
    }
};
exports.DisponibilidadeService = DisponibilidadeService;
exports.DisponibilidadeService = DisponibilidadeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [agentes_service_1.AgentesService,
        agendamentos_service_1.AgendamentosService])
], DisponibilidadeService);
//# sourceMappingURL=disponibilidade.service.js.map