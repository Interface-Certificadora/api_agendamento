import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Agendamento } from './entities/agendamento.model';
import { FcWeb } from 'src/fcweb/fcweb.model';
import { Agente } from 'src/agentes/entities/agente.model';

@Injectable()
export class AgendamentosService {
  constructor(
    @InjectModel(Agendamento)
    private agendamentoModel: typeof Agendamento,
  ) {}

  async findAgendamentosDoDia(data?: Date): Promise<Agendamento[]> {
    const dataAlvo = data || new Date();

    const dataFormatada = dataAlvo.toISOString().slice(0, 10);

    return this.agendamentoModel.findAll({
      where: {
        dataAgendada: dataFormatada,
      },
      include: [Agente, FcWeb],
      order: [['hora_agendada', 'ASC']],
    });
  }

  async create(createAgendamentoDto: any): Promise<Agendamento> {
    try {
      createAgendamentoDto.modalidade = 'VIDEO CONF';
      return this.agendamentoModel.create(createAgendamentoDto);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async update(id: number, updateAgendamentoDto: any): Promise<Agendamento> {
    try {
      const data = await this.agendamentoModel.update(updateAgendamentoDto, {
        where: { id },
      });
      return this.agendamentoModel.findByPk(id);
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
