// src/disponibilidade/disponibilidade.service.ts

import { Injectable } from '@nestjs/common';
import { AgendamentosService } from '../agendamentos/agendamentos.service';
import { AgentesService } from '../agentes/agentes.service';

@Injectable()
export class DisponibilidadeService {
  constructor(
    private readonly agentesService: AgentesService,
    private readonly agendamentosService: AgendamentosService,
  ) {}

  async findHorariosLivres(agentIds: number[]) {
    const agentesDisponiveis =
      await this.agentesService.findDisponibilidadesPorAgentes(agentIds, 2);  

    const agendamentosDoDia =
      await this.agendamentosService.findAgendamentosDoDia();

    const horariosOcupados = new Set<string>();
    agendamentosDoDia.forEach((agendamento) => {
      const chave = `${agendamento.agenteId}-${agendamento.horaAgendada}`;
      horariosOcupados.add(chave);
    });

    const agentesComHorariosReais = agentesDisponiveis
      .map((agente) => {
        const disponibilidadesReais = agente.disponibilidades.filter(
          (disp: any) => {
            const chave = `${agente.id}-${disp.hora}`;
            return !horariosOcupados.has(chave);
          },
        );

        return {
          ...agente,
          disponibilidades: disponibilidadesReais,
        };
      })
      .filter((agente) => agente.disponibilidades.length > 0);

    return agentesComHorariosReais;
  }
}
