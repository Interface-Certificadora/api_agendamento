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
exports.FcWeb = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const agendamento_model_1 = require("../agendamentos/entities/agendamento.model");
let FcWeb = class FcWeb extends sequelize_typescript_1.Model {
};
exports.FcWeb = FcWeb;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], FcWeb.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], FcWeb.prototype, "s_alerta", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], FcWeb.prototype, "referencia", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], FcWeb.prototype, "id_boleto", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], FcWeb.prototype, "id_cancelar_bol_rem", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], FcWeb.prototype, "unidade", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], FcWeb.prototype, "responsavel", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], FcWeb.prototype, "criou_fc", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], FcWeb.prototype, "andamento", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], FcWeb.prototype, "prioridade", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], FcWeb.prototype, "solicitacao", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], FcWeb.prototype, "venda", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], FcWeb.prototype, "cpf", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], FcWeb.prototype, "cnpj", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], FcWeb.prototype, "nome", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], FcWeb.prototype, "razaosocial", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DATEONLY),
    __metadata("design:type", Date)
], FcWeb.prototype, "vectoboleto", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], FcWeb.prototype, "unico", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], FcWeb.prototype, "contador", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], FcWeb.prototype, "obscont", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.FLOAT),
    __metadata("design:type", Number)
], FcWeb.prototype, "comissaoparceiro", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(10)),
    __metadata("design:type", String)
], FcWeb.prototype, "scp", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], FcWeb.prototype, "tipocd", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], FcWeb.prototype, "valorcd", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], FcWeb.prototype, "custocd", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], FcWeb.prototype, "custoCdpar", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], FcWeb.prototype, "estatos_pgto", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(100)),
    __metadata("design:type", String)
], FcWeb.prototype, "pgto_efi", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], FcWeb.prototype, "formapgto", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], FcWeb.prototype, "vouchersoluti", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], FcWeb.prototype, "ct_parcela", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], FcWeb.prototype, "telefone", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], FcWeb.prototype, "telefone2", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], FcWeb.prototype, "email", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], FcWeb.prototype, "dtnascimento", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], FcWeb.prototype, "rg", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], FcWeb.prototype, "cei", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], FcWeb.prototype, "endereco", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], FcWeb.prototype, "nrua", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], FcWeb.prototype, "bairro", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], FcWeb.prototype, "complemento", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], FcWeb.prototype, "cep", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], FcWeb.prototype, "uf", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], FcWeb.prototype, "im", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], FcWeb.prototype, "cidade", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TEXT('long')),
    __metadata("design:type", String)
], FcWeb.prototype, "observacao", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DATEONLY),
    __metadata("design:type", Date)
], FcWeb.prototype, "vctoCD", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TEXT('long')),
    __metadata("design:type", String)
], FcWeb.prototype, "historico", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(100)),
    __metadata("design:type", String)
], FcWeb.prototype, "arquivo", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(100)),
    __metadata("design:type", String)
], FcWeb.prototype, "nomearquivo", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], FcWeb.prototype, "obsrenovacao", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DATEONLY),
    __metadata("design:type", Date)
], FcWeb.prototype, "dt_aprovacao", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TIME),
    __metadata("design:type", String)
], FcWeb.prototype, "hr_aprovacao", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.FLOAT),
    __metadata("design:type", Number)
], FcWeb.prototype, "comicao", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], FcWeb.prototype, "validacao", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], FcWeb.prototype, "nfe", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TEXT),
    __metadata("design:type", String)
], FcWeb.prototype, "urlnota", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(11)),
    __metadata("design:type", String)
], FcWeb.prototype, "id_fcw_soluti", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DATEONLY),
    __metadata("design:type", Date)
], FcWeb.prototype, "dt_agenda", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TIME),
    __metadata("design:type", String)
], FcWeb.prototype, "hr_agenda", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], FcWeb.prototype, "obs_agenda", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(150)),
    __metadata("design:type", String)
], FcWeb.prototype, "reg_cnh", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    __metadata("design:type", Date)
], FcWeb.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    __metadata("design:type", Date)
], FcWeb.prototype, "updatedAt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.INTEGER),
    __metadata("design:type", Number)
], FcWeb.prototype, "id_agendamento", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.DATE),
    __metadata("design:type", Date)
], FcWeb.prototype, "dt_revogacao", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TEXT),
    __metadata("design:type", String)
], FcWeb.prototype, "linkVideo", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.TEXT),
    __metadata("design:type", String)
], FcWeb.prototype, "linkFoto", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, defaultValue: 0 }),
    __metadata("design:type", Number)
], FcWeb.prototype, "notificacoes", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)(sequelize_typescript_1.DataType.STRING(200)),
    __metadata("design:type", String)
], FcWeb.prototype, "reagendamento", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => agendamento_model_1.Agendamento),
    __metadata("design:type", Array)
], FcWeb.prototype, "agendamentos", void 0);
exports.FcWeb = FcWeb = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'fcweb',
        timestamps: true,
    })
], FcWeb);
//# sourceMappingURL=fcweb.model.js.map