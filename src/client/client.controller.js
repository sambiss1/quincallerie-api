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
exports.ClientController = void 0;
var common_1 = require("@nestjs/common");
var ClientController = /** @class */ (function () {
    function ClientController(clientService) {
        this.clientService = clientService;
    }
    ClientController.prototype.create = function (createClientDto) {
        return this.clientService.addClient(createClientDto);
    };
    ClientController.prototype.findAll = function () {
        return this.clientService.getClients();
    };
    ClientController.prototype.findOne = function (id) {
        return this.clientService.getClientById(+id);
    };
    ClientController.prototype.update = function (id, updateClientDto) {
        return this.clientService.UpdateClientDto(+id, updateClientDto);
    };
    ClientController.prototype.remove = function (id) {
        return this.clientService.deleteClient(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], ClientController.prototype, "create");
    __decorate([
        (0, common_1.Get)()
    ], ClientController.prototype, "findAll");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], ClientController.prototype, "findOne");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], ClientController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], ClientController.prototype, "remove");
    ClientController = __decorate([
        (0, common_1.Controller)('client')
    ], ClientController);
    return ClientController;
}());
exports.ClientController = ClientController;
