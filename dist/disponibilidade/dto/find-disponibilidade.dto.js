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
exports.FindDisponibilidadeDto = void 0;
const class_validator_1 = require("class-validator");
class FindDisponibilidadeDto {
}
exports.FindDisponibilidadeDto = FindDisponibilidadeDto;
__decorate([
    (0, class_validator_1.IsArray)({ message: 'agentIds deve ser um array.' }),
    (0, class_validator_1.ArrayNotEmpty)({ message: 'agentIds não pode ser um array vazio.' }),
    (0, class_validator_1.IsInt)({
        each: true,
        message: 'Cada item em agentIds deve ser um número inteiro.',
    }),
    __metadata("design:type", Array)
], FindDisponibilidadeDto.prototype, "agentIds", void 0);
//# sourceMappingURL=find-disponibilidade.dto.js.map