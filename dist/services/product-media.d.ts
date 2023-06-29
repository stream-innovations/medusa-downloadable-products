import { FindConfig } from "@medusajs/medusa";
import { SharedContext } from "@medusajs/types";
import { ProductMediaVariantType } from "../models/product-media-variant";
import { EntityManager } from "typeorm";
import { CreateProductMediaInput, FilterableProductMediaFields, ProductMediaDTO, ProductMediaVariantDTO, UpdateProductMediaInput } from "../types/product-media";
type InjectedDependencies = {
    manager: EntityManager;
};
declare class ProductMediaService {
    private manager;
    constructor(container: InjectedDependencies);
    private getManager;
    retrieve(id: string, options?: FindConfig<ProductMediaDTO>, context?: SharedContext): Promise<ProductMediaDTO>;
    list(selector: FilterableProductMediaFields, config: FindConfig<ProductMediaDTO>, context?: SharedContext): Promise<ProductMediaDTO[]>;
    listAndCount(selector: FilterableProductMediaFields, config: FindConfig<ProductMediaDTO>, context?: SharedContext): Promise<[ProductMediaDTO[], number]>;
    listVariants(mediaIds: string[], context?: SharedContext): Promise<ProductMediaVariantDTO[]>;
    create(data: CreateProductMediaInput, context?: SharedContext): Promise<ProductMediaDTO>;
    update(id: string, data: UpdateProductMediaInput, context?: SharedContext): Promise<ProductMediaDTO>;
    delete(id: string, context?: SharedContext): Promise<void>;
    attachToVariant(mediaId: string, variantId: string, type: ProductMediaVariantType, context?: SharedContext): Promise<ProductMediaVariantDTO>;
    detachFromVariant(mediaId: string, variantId: string, type: ProductMediaVariantType, context?: SharedContext): Promise<void>;
    private prepareQuery;
    private extendQueryByVariantId;
}
export default ProductMediaService;
