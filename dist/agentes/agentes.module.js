"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentesModule = void 0;
const common_1 = require("@nestjs/common");
const agentes_service_1 = require("./agentes.service");
const agentes_controller_1 = require("./agentes.controller");
const sequelize_1 = require("@nestjs/sequelize");
const agente_model_1 = require("./entities/agente.model");
const agente_disponibilidade_model_1 = require("./entities/agente-disponibilidade.model");
const agente_modalidade_model_1 = require("./entities/agente-modalidade.model");
let AgentesModule = class AgentesModule {
};
exports.AgentesModule = AgentesModule;
exports.AgentesModule = AgentesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            sequelize_1.SequelizeModule.forFeature([
                agente_model_1.Agente,
                agente_disponibilidade_model_1.AgenteDisponibilidade,
                agente_modalidade_model_1.AgenteModalidade,
            ]),
        ],
        controllers: [agentes_controller_1.AgentesController],
        providers: [agentes_service_1.AgentesService],
        exports: [agentes_service_1.AgentesService],
    })
], AgentesModule);
//# sourceMappingURL=agentes.module.js.map