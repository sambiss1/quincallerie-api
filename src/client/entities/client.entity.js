"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ClientEntity = void 0;
/* eslint-disable prettier/prettier */
var typeorm_1 = require("typeorm");
var ClientEntity = /** @class */ (function () {
    function ClientEntity() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_client' })
    ], ClientEntity.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ length: 50, name: 'nom_client' })
    ], ClientEntity.prototype, "client_name");
    __decorate([
        (0, typeorm_1.Column)({ length: 50, name: 'prenom_client' })
    ], ClientEntity.prototype, "client_firstName");
    __decorate([
        (0, typeorm_1.Column)({ length: 50, name: 'adresse_client' })
    ], ClientEntity.prototype, "client_adresse");
    __decorate([
        (0, typeorm_1.Column)({ name: 'telephone_client' })
    ], ClientEntity.prototype, "client_phone");
    __decorate([
        (0, typeorm_1.Column)({ length: 50, name: 'email_client' })
    ], ClientEntity.prototype, "client_email");
    ClientEntity = __decorate([
        (0, typeorm_1.Entity)('client')
    ], ClientEntity);
    return ClientEntity;
}());
exports.ClientEntity = ClientEntity;
