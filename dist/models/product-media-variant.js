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
exports.ProductMediaVariant = exports.ProductMediaVariantType = void 0;
const medusa_1 = require("@medusajs/medusa");
const typeorm_1 = require("typeorm");
var ProductMediaVariantType;
(function (ProductMediaVariantType) {
    ProductMediaVariantType["PREVIEW"] = "preview";
    ProductMediaVariantType["MAIN"] = "main";
})(ProductMediaVariantType = exports.ProductMediaVariantType || (exports.ProductMediaVariantType = {}));
let ProductMediaVariant = class ProductMediaVariant extends medusa_1.SoftDeletableEntity {
    beforeInsert() {
        this.id = (0, medusa_1.generateEntityId)(this.id, "pmvar");
    }
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProductMediaVariant.prototype, "product_media_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ProductMediaVariant.prototype, "variant_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "enum", enum: ProductMediaVariantType }),
    __metadata("design:type", String)
], ProductMediaVariant.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductMediaVariant.prototype, "beforeInsert", null);
ProductMediaVariant = __decorate([
    (0, typeorm_1.Entity)()
], ProductMediaVariant);
exports.ProductMediaVariant = ProductMediaVariant;
