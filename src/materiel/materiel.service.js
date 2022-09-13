"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MaterielService = void 0;
var common_1 = require("@nestjs/common");
var MaterielService = /** @class */ (function () {
    function MaterielService() {
    }
    MaterielService.prototype.create = function (createMaterielDto) {
        return 'This action adds a new materiel';
    };
    MaterielService.prototype.findAll = function () {
        return "This action returns all materiel";
    };
    MaterielService.prototype.findOne = function (id) {
        return "This action returns a #".concat(id, " materiel");
    };
    MaterielService.prototype.update = function (id, updateMaterielDto) {
        return "This action updates a #".concat(id, " materiel");
    };
    MaterielService.prototype.remove = function (id) {
        return "This action removes a #".concat(id, " materiel");
    };
    MaterielService = __decorate([
        (0, common_1.Injectable)()
    ], MaterielService);
    return MaterielService;
}());
exports.MaterielService = MaterielService;
