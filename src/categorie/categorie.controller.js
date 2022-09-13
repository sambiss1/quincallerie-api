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
exports.CategorieController = void 0;
var common_1 = require("@nestjs/common");
var CategorieController = /** @class */ (function () {
    function CategorieController(categorieService) {
        this.categorieService = categorieService;
    }
    CategorieController.prototype.create = function (createCategorieDto) {
        return this.categorieService.addCategorie(createCategorieDto);
    };
    CategorieController.prototype.findAll = function () {
        return this.categorieService.getCategories();
    };
    CategorieController.prototype.findOne = function (id) {
        return this.categorieService.getCategorieById(+id);
    };
    CategorieController.prototype.update = function (id, updateCategorieDto) {
        return this.categorieService.UpdateCategorieDto(+id, updateCategorieDto);
    };
    CategorieController.prototype.remove = function (id) {
        return this.categorieService.deleteCategorie(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], CategorieController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], CategorieController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], CategorieController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], CategorieController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], CategorieController.prototype, "remove");
    CategorieController = __decorate([
        (0, common_1.Controller)('categorie')
    ], CategorieController);
    return CategorieController;
}());
exports.CategorieController = CategorieController;
