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
exports.ProductMedia = void 0;
const medusa_1 = require("@medusajs/medusa");
const typeorm_1 = require("typeorm");
let ProductMedia = class ProductMedia extends medusa_1.SoftDeletableEntity {
    beforeInsert() {
        this.id = (0, medusa_1.generateEntityId)(this.id, "prodmed");
    }
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProductMedia.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProductMedia.prototype, "file", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProductMedia.prototype, "mime_type", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductMedia.prototype, "beforeInsert", null);
ProductMedia = __decorate([
    (0, typeorm_1.Entity)()
], ProductMedia);
exports.ProductMedia = ProductMedia;
