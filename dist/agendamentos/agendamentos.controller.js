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
exports.AgendamentosController = void 0;
const common_1 = require("@nestjs/common");
const agendamentos_service_1 = require("./agendamentos.service");
const create_agendamento_dto_1 = require("./dto/create-agendamento.dto");
const update_agendamento_dto_1 = require("./dto/update-agendamento.dto");
let AgendamentosController = class AgendamentosController {
    constructor(agendamentosService) {
        this.agendamentosService = agendamentosService;
    }
    findAll() {
        return this.agendamentosService.findAgendamentosDoDia();
    }
    async create(createAgendamentoDto) {
        return this.agendamentosService.create(createAgendamentoDto);
    }
    async update(id, updateAgendamentoDto) {
        return await this.agendamentosService.update(id, updateAgendamentoDto);
    }
};
exports.AgendamentosController = AgendamentosController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AgendamentosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_agendamento_dto_1.CreateAgendamentoDto]),
    __metadata("design:returntype", Promise)
], AgendamentosController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_agendamento_dto_1.UpdateAgendamentoDto]),
    __metadata("design:returntype", Promise)
], AgendamentosController.prototype, "update", null);
exports.AgendamentosController = AgendamentosController = __decorate([
    (0, common_1.Controller)('agendamentos'),
    __metadata("design:paramtypes", [agendamentos_service_1.AgendamentosService])
], AgendamentosController);
//# sourceMappingURL=agendamentos.controller.js.map