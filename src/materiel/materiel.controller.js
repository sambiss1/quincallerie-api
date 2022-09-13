"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.MaterielController = void 0;
var common_1 = require("@nestjs/common");
var MaterielController = /** @class */ (function () {
    function MaterielController(materielService) {
        this.materielService = materielService;
    }
    MaterielController.prototype.create = function (createMaterielDto) {
        return this.materielService.create(createMaterielDto);
    };
    MaterielController.prototype.findAll = function () {
        return this.materielService.findAll();
    };
    MaterielController.prototype.findOne = function (id) {
        return this.materielService.findOne(+id);
    };
    MaterielController.prototype.update = function (id, updateMaterielDto) {
        return this.materielService.update(+id, updateMaterielDto);
    };
    MaterielController.prototype.remove = function (id) {
        return this.materielService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], MaterielController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], MaterielController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], MaterielController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], MaterielController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], MaterielController.prototype, "remove");
    MaterielController = __decorate([
        (0, common_1.Controller)('materiel')
    ], MaterielController);
    return MaterielController;
}());
exports.MaterielController = MaterielController;
