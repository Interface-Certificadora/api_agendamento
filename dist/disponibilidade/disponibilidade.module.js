"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisponibilidadeModule = void 0;
const common_1 = require("@nestjs/common");
const disponibilidade_service_1 = require("./disponibilidade.service");
const disponibilidade_controller_1 = require("./disponibilidade.controller");
const agentes_module_1 = require("../agentes/agentes.module");
const agendamentos_module_1 = require("../agendamentos/agendamentos.module");
let DisponibilidadeModule = class DisponibilidadeModule {
};
exports.DisponibilidadeModule = DisponibilidadeModule;
exports.DisponibilidadeModule = DisponibilidadeModule = __decorate([
    (0, common_1.Module)({
        imports: [agentes_module_1.AgentesModule, agendamentos_module_1.AgendamentosModule],
        controllers: [disponibilidade_controller_1.DisponibilidadeController],
        providers: [disponibilidade_service_1.DisponibilidadeService],
    })
], DisponibilidadeModule);
//# sourceMappingURL=disponibilidade.module.js.map