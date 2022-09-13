"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Materiel = void 0;
/* eslint-disable prettier/prettier */
var typeorm_1 = require("typeorm");
// import { Categorie } from '../categorie/entities/categorie.entity';
var categorie_entity_1 = require("src/categorie/entities/categorie.entity");
var Materiel = /** @class */ (function () {
    function Materiel() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'id_materiel' })
    ], Materiel.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ length: 50, name: 'nom_materiel' })
    ], Materiel.prototype, "nom_materiel");
    __decorate([
        (0, typeorm_1.Column)({ length: 50, name: 'prenom_client' })
    ], Materiel.prototype, "client_firstName");
    __decorate([
        (0, typeorm_1.Column)({ length: 50, name: 'adresse_client' })
    ], Materiel.prototype, "client_adresse");
    __decorate([
        (0, typeorm_1.Column)({ name: 'telephone_client' })
    ], Materiel.prototype, "client_phone");
    __decorate([
        (0, typeorm_1.Column)({ length: 50, name: 'email_client' })
    ], Materiel.prototype, "client_email");
    __decorate([
        (0, typeorm_1.JoinColumn)({ name: 'id_categorie' }),
        (0, typeorm_1.OneToOne)(function () { return categorie_entity_1.Categorie; }, function (categorie) { return categorie.id; })
    ], Materiel.prototype, "categorie");
    Materiel = __decorate([
        (0, typeorm_1.Entity)('materiel')
    ], Materiel);
    return Materiel;
}());
exports.Materiel = Materiel;
