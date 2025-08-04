import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Agente } from './entities/agente.model';
import { AgenteDisponibilidade } from './entities/agente-disponibilidade.model';
import { Op } from 'sequelize';
import { AgenteModalidade } from './entities/agente-modalidade.model';
import { AgenteDisponivelResponse } from './dto/agente-disponivel-response.dto';

@Injectable()
export class AgentesService {
  constructor(
    @InjectModel(Agente)
    private agenteModel: typeof Agente,
  ) {}

  async findAll(): Promise<Agente[]> {
    return this.agenteModel.findAll();
  }

  async findDisponiveisNaProximaHora(): Promise<AgenteDisponivelResponse[]> {
    const agora = new Date();
    const daquiUmaHora = new Date(agora.getTime() + 60 * 60 * 1000);

    const diasDaSemana = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];
    const diaDeHoje = diasDaSemana[agora.getDay()];

    const horaAtual = agora.toLocaleTimeString('pt-BR', { hour12: false });
    const horaDaquiUmaHora = daquiUmaHora.toLocaleTimeString('pt-BR', {
      hour12: false,
    });

    const agentes = await this.agenteModel.findAll({
      where: {
        ativo: true,
      },
      include: [
        {
          model: AgenteDisponibilidade,
          required: true,
          where: {
            dia_semana: diaDeHoje,
            disponivel: true,
            hora: {
              [Op.between]: [horaAtual, horaDaquiUmaHora],
            },
          },
        },
        {
          model: AgenteModalidade,
          required: false,
        },
      ],

      group: ['Agente.id', 'disponibilidades.id', 'modalidades.id'],
    });
    const resultadoFormatado: AgenteDisponivelResponse[] = agentes.map(
      (agente) => {
        const plainAgente = agente.get({ plain: true });

        return {
          id: plainAgente.id,
          nome: plainAgente.nome,
          ativo: plainAgente.ativo,
          disponibilidades: plainAgente.disponibilidades.map((disp) => ({
            diaSemana: disp.diaSemana,
            hora: disp.hora,
          })),
          modalidades: plainAgente.modalidades.map((mod) => mod.modalidade),
        };
      },
    );

    return resultadoFormatado;
  }

  async findDisponibilidadesPorAgentes(
    agentIds: number[],
    horasNoFuturo: number,
  ): Promise<any[]> {
    if (!agentIds || agentIds.length === 0) {
      return [];
    }

    const agora = new Date();
    const daquiXHoras = new Date(
      agora.getTime() + horasNoFuturo * 60 * 60 * 1000,
    );

    const diasDaSemana = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];
    const diaDeHoje = diasDaSemana[agora.getDay()];

    const horaAtual = agora.toLocaleTimeString('pt-BR', { hour12: false });
    const horaFinal = daquiXHoras.toLocaleTimeString('pt-BR', {
      hour12: false,
    });

    const agentes = await this.agenteModel.findAll({
      where: {
        ativo: true,

        id: {
          [Op.in]: agentIds,
        },
      },
      include: [
        {
          model: AgenteDisponibilidade,
          required: true,
          attributes: ['diaSemana', 'hora'],
          where: {
            dia_semana: diaDeHoje,
            disponivel: true,
            hora: {
              [Op.between]: [horaAtual, horaFinal],
            },
          },
        },
        {
          model: AgenteModalidade,
          required: false,
          attributes: ['modalidade'],
        },
      ],
      group: ['Agente.id', 'disponibilidades.id', 'modalidades.id'],
    });

    return agentes.map((agente) => {
      const plainAgente = agente.get({ plain: true });
      return {
        ...plainAgente,
        modalidades: plainAgente.modalidades.map((mod) => mod.modalidade),
      };
    });
  }
}
