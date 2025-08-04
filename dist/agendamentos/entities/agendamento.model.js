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
exports.Agendamento = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_1 = require("sequelize");
const fcweb_model_1 = require("../../fcweb/fcweb.model");
const agente_model_1 = require("../../agentes/entities/agente.model");
let Agendamento = class Agendamento extends sequelize_typescript_1.Model {
};
exports.Agendamento = Agendamento;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Agendamento.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => fcweb_model_1.FcWeb),
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        field: 'id_fcweb',
    }),
    __metadata("design:type", Number)
], Agendamento.prototype, "idFcweb", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => fcweb_model_1.FcWeb, {
        foreignKey: 'idFcweb',
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", fcweb_model_1.FcWeb)
], Agendamento.prototype, "fcweb", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATEONLY,
        field: 'data_agendada',
    }),
    __metadata("design:type", Date)
], Agendamento.prototype, "dataAgendada", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TIME,
        field: 'hora_agendada',
    }),
    __metadata("design:type", String)
], Agendamento.prototype, "horaAgendada", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM('VIDEO CONF', 'VIDEO GT', 'VIDEO APP', 'INTERNA', 'EXTERNA', 'EMISAO_ONLINE'),
    }),
    __metadata("design:type", String)
], Agendamento.prototype, "modalidade", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => agente_model_1.Agente),
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        field: 'agente_id',
    }),
    __metadata("design:type", Number)
], Agendamento.prototype, "agenteId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => agente_model_1.Agente, {
        foreignKey: 'agenteId',
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", agente_model_1.Agente)
], Agendamento.prototype, "agente", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        field: 'criado_em',
        defaultValue: sequelize_1.Sequelize.literal('CURRENT_TIMESTAMP'),
    }),
    __metadata("design:type", Date)
], Agendamento.prototype, "criadoEm", void 0);
exports.Agendamento = Agendamento = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'agendamentos',
        timestamps: false,
    })
], Agendamento);
//# sourceMappingURL=agendamento.model.js.map