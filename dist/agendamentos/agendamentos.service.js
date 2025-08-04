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
exports.AgendamentosService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const agendamento_model_1 = require("./entities/agendamento.model");
const fcweb_model_1 = require("../fcweb/fcweb.model");
const agente_model_1 = require("../agentes/entities/agente.model");
let AgendamentosService = class AgendamentosService {
    constructor(agendamentoModel) {
        this.agendamentoModel = agendamentoModel;
    }
    async findAgendamentosDoDia(data) {
        const dataAlvo = data || new Date();
        const dataFormatada = dataAlvo.toISOString().slice(0, 10);
        return this.agendamentoModel.findAll({
            where: {
                dataAgendada: dataFormatada,
            },
            include: [agente_model_1.Agente, fcweb_model_1.FcWeb],
            order: [['hora_agendada', 'ASC']],
        });
    }
    async create(createAgendamentoDto) {
        try {
            createAgendamentoDto.modalidade = 'VIDEO CONF';
            return this.agendamentoModel.create(createAgendamentoDto);
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
    async update(id, updateAgendamentoDto) {
        try {
            const data = await this.agendamentoModel.update(updateAgendamentoDto, {
                where: { id },
            });
            return this.agendamentoModel.findByPk(id);
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
};
exports.AgendamentosService = AgendamentosService;
exports.AgendamentosService = AgendamentosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(agendamento_model_1.Agendamento)),
    __metadata("design:paramtypes", [Object])
], AgendamentosService);
//# sourceMappingURL=agendamentos.service.js.map