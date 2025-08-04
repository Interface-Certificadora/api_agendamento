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
exports.Agente = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const agendamento_model_1 = require("../../agendamentos/entities/agendamento.model");
const agente_disponibilidade_model_1 = require("./agente-disponibilidade.model");
const agente_modalidade_model_1 = require("./agente-modalidade.model");
let Agente = class Agente extends sequelize_typescript_1.Model {
};
exports.Agente = Agente;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Agente.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(100),
    }),
    __metadata("design:type", String)
], Agente.prototype, "nome", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BOOLEAN,
        defaultValue: true,
    }),
    __metadata("design:type", Boolean)
], Agente.prototype, "ativo", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => agendamento_model_1.Agendamento),
    __metadata("design:type", Array)
], Agente.prototype, "agendamentos", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => agente_disponibilidade_model_1.AgenteDisponibilidade),
    __metadata("design:type", Array)
], Agente.prototype, "disponibilidades", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => agente_modalidade_model_1.AgenteModalidade),
    __metadata("design:type", Array)
], Agente.prototype, "modalidades", void 0);
exports.Agente = Agente = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'agentes',
        timestamps: false,
    })
], Agente);
//# sourceMappingURL=agente.model.js.map