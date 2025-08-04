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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentesService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const agente_model_1 = require("./entities/agente.model");
const agente_disponibilidade_model_1 = require("./entities/agente-disponibilidade.model");
const sequelize_2 = require("sequelize");
const agente_modalidade_model_1 = require("./entities/agente-modalidade.model");
let AgentesService = class AgentesService {
    constructor(agenteModel) {
        this.agenteModel = agenteModel;
    }
    async findAll() {
        return this.agenteModel.findAll();
    }
    async findDisponiveisNaProximaHora() {
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
                    model: agente_disponibilidade_model_1.AgenteDisponibilidade,
                    required: true,
                    where: {
                        dia_semana: diaDeHoje,
                        disponivel: true,
                        hora: {
                            [sequelize_2.Op.between]: [horaAtual, horaDaquiUmaHora],
                        },
                    },
                },
                {
                    model: agente_modalidade_model_1.AgenteModalidade,
                    required: false,
                },
            ],
            group: ['Agente.id', 'disponibilidades.id', 'modalidades.id'],
        });
        const resultadoFormatado = agentes.map((agente) => {
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
        });
        return resultadoFormatado;
    }
    async findDisponibilidadesPorAgentes(agentIds, horasNoFuturo) {
        if (!agentIds || agentIds.length === 0) {
            return [];
        }
        const agora = new Date();
        const daquiXHoras = new Date(agora.getTime() + horasNoFuturo * 60 * 60 * 1000);
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
                    [sequelize_2.Op.in]: agentIds,
                },
            },
            include: [
                {
                    model: agente_disponibilidade_model_1.AgenteDisponibilidade,
                    required: true,
                    attributes: ['diaSemana', 'hora'],
                    where: {
                        dia_semana: diaDeHoje,
                        disponivel: true,
                        hora: {
                            [sequelize_2.Op.between]: [horaAtual, horaFinal],
                        },
                    },
                },
                {
                    model: agente_modalidade_model_1.AgenteModalidade,
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
};
exports.AgentesService = AgentesService;
exports.AgentesService = AgentesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(agente_model_1.Agente)),
    __metadata("design:paramtypes", [Object])
], AgentesService);
//# sourceMappingURL=agentes.service.js.map