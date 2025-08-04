"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const sequelize_1 = require("@nestjs/sequelize");
const agendamentos_module_1 = require("./agendamentos/agendamentos.module");
const agendamento_model_1 = require("./agendamentos/entities/agendamento.model");
const agente_model_1 = require("./agentes/entities/agente.model");
const fcweb_model_1 = require("./fcweb/fcweb.model");
const agentes_module_1 = require("./agentes/agentes.module");
const agente_disponibilidade_model_1 = require("./agentes/entities/agente-disponibilidade.model");
const agente_modalidade_model_1 = require("./agentes/entities/agente-modalidade.model");
const disponibilidade_module_1 = require("./disponibilidade/disponibilidade.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            sequelize_1.SequelizeModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    dialect: 'mysql',
                    host: configService.get('DB_HOST'),
                    port: configService.get('DB_PORT'),
                    username: configService.get('DB_USER'),
                    password: configService.get('DB_PASS'),
                    database: configService.get('DB_NAME'),
                    models: [agendamento_model_1.Agendamento, agente_model_1.Agente, fcweb_model_1.FcWeb, agente_disponibilidade_model_1.AgenteDisponibilidade, agente_modalidade_model_1.AgenteModalidade],
                    synchronize: false,
                }),
                inject: [config_1.ConfigService],
            }),
            agendamentos_module_1.AgendamentosModule,
            agentes_module_1.AgentesModule,
            disponibilidade_module_1.DisponibilidadeModule,
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map