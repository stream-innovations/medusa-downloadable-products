"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const medusa_core_utils_1 = require("medusa-core-utils");
const medusa_1 = require("@medusajs/medusa");
const product_media_1 = require("../models/product-media");
const product_media_variant_1 = require("../models/product-media-variant");
const typeorm_1 = require("typeorm");
class ProductMediaService {
    constructor(container) {
        this.manager = container.manager;
    }
    getManager(context = {}) {
        return context.transactionManager || this.manager;
    }
    async retrieve(id, options = {}, context) {
        if (!(0, medusa_core_utils_1.isDefined)(id)) {
            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, `"id" must be defined`);
        }
        const mediaRepo = this.getManager(context).getRepository(product_media_1.ProductMedia);
        const query = (0, medusa_1.buildQuery)({ id }, options);
        const productMedia = await mediaRepo.findOne(query);
        if (!productMedia) {
            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, `Product media with id: ${id} was not found`);
        }
        return productMedia;
    }
    async list(selector, config, context) {
        const manager = this.getManager(context);
        const mediaRepo = manager.getRepository(product_media_1.ProductMedia);
        const query = await this.prepareQuery(selector, config, manager);
        return await mediaRepo.find(query);
    }
    async listAndCount(selector, config, context) {
        const manager = this.getManager(context);
        const mediaRepo = manager.getRepository(product_media_1.ProductMedia);
        const query = await this.prepareQuery(selector, config, manager);
        return await mediaRepo.findAndCount(query);
    }
    async listVariants(mediaIds, context) {
        const manager = this.getManager(context);
        const variantRepo = manager.getRepository(product_media_variant_1.ProductMediaVariant);
        const variants = await variantRepo.find({
            where: {
                product_media_id: (0, typeorm_1.In)(mediaIds),
            },
        });
        return variants;
    }
    async create(data, context) {
        const mediaRepo = this.getManager(context).getRepository(product_media_1.ProductMedia);
        const media = mediaRepo.create(data);
        return await mediaRepo.save(media);
    }
    async update(id, data, context) {
        const mediaRepo = this.getManager(context).getRepository(product_media_1.ProductMedia);
        const media = await this.retrieve(id);
        for (const [key, value] of Object.entries(data)) {
            media[key] = value;
        }
        return await mediaRepo.save(media);
    }
    async delete(id, context) {
        var _a;
        const manager = this.getManager(context);
        const work = async (transactionManager) => {
            const mediaRepo = transactionManager.getRepository(product_media_1.ProductMedia);
            const media = await mediaRepo.findOne({
                where: { id },
            });
            if (media) {
                await mediaRepo.remove(media);
            }
            // delete variant media attachments
            const variantRepo = transactionManager.getRepository(product_media_variant_1.ProductMediaVariant);
            await variantRepo.delete({
                product_media_id: id,
            });
        };
        if ((_a = manager.queryRunner) === null || _a === void 0 ? void 0 : _a.isTransactionActive) {
            await work(manager);
        }
        else {
            await manager.transaction(work);
        }
    }
    async attachToVariant(mediaId, variantId, type, context) {
        const variantRepo = this.getManager(context).getRepository(product_media_variant_1.ProductMediaVariant);
        // Will thorw if not found
        await this.retrieve(mediaId, {}, context);
        const existing = await variantRepo.findOne({
            where: { product_media_id: mediaId, variant_id: variantId, type },
        });
        if (existing) {
            return existing;
        }
        const mediaVariant = variantRepo.create({
            product_media_id: mediaId,
            variant_id: variantId,
            type,
        });
        await variantRepo.save(mediaVariant);
        return mediaVariant;
    }
    async detachFromVariant(mediaId, variantId, type, context) {
        const variantRepo = this.getManager(context).getRepository(product_media_variant_1.ProductMediaVariant);
        const existing = await variantRepo.findOne({
            where: { product_media_id: mediaId, variant_id: variantId, type },
        });
        if (!existing) {
            return;
        }
        await variantRepo.remove(existing);
    }
    async prepareQuery(selector, config, manager) {
        const { variant_id, attachment_type, ...rest } = selector;
        let query = (0, medusa_1.buildQuery)(rest, config);
        if (variant_id) {
            const variantIds = Array.isArray(variant_id) ? variant_id : [variant_id];
            let attachmentTypes = [];
            if (attachment_type) {
                attachmentTypes = Array.isArray(attachment_type)
                    ? attachment_type
                    : [attachment_type];
            }
            query = await this.extendQueryByVariantId(query, variantIds, attachmentTypes, manager);
        }
        return query;
    }
    async extendQueryByVariantId(query, variantIds, attachmentTypes, manager) {
        const variantRepo = manager.getRepository(product_media_variant_1.ProductMediaVariant);
        const where = {
            variant_id: (0, typeorm_1.In)(variantIds),
        };
        if (attachmentTypes.length > 0) {
            where["type"] = Array.isArray(attachmentTypes)
                ? (0, typeorm_1.In)(attachmentTypes)
                : attachmentTypes;
        }
        const variants = await variantRepo.find({ where });
        const mediaIds = variants.map((v) => v.product_media_id);
        query.where = {
            ...query.where,
            id: (0, typeorm_1.In)(mediaIds),
        };
        return query;
    }
}
exports.default = ProductMediaService;
