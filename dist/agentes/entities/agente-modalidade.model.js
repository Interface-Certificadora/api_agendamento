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
exports.AgenteModalidade = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const agente_model_1 = require("./agente.model");
let AgenteModalidade = class AgenteModalidade extends sequelize_typescript_1.Model {
};
exports.AgenteModalidade = AgenteModalidade;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], AgenteModalidade.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => agente_model_1.Agente),
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        field: 'agente_id',
    }),
    __metadata("design:type", Number)
], AgenteModalidade.prototype, "agenteId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => agente_model_1.Agente, {
        foreignKey: 'agenteId',
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", agente_model_1.Agente)
], AgenteModalidade.prototype, "agente", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM('VIDEO CONF', 'VIDEO GT', 'VIDEO APP', 'INTERNA', 'EXTERNA', 'EMISAO_ONLINE'),
    }),
    __metadata("design:type", String)
], AgenteModalidade.prototype, "modalidade", void 0);
exports.AgenteModalidade = AgenteModalidade = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'agente_modalidade',
        timestamps: false,
    })
], AgenteModalidade);
//# sourceMappingURL=agente-modalidade.model.js.map