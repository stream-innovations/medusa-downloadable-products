import { SoftDeletableEntity } from "@medusajs/medusa";
export declare enum ProductMediaVariantType {
    PREVIEW = "preview",
    MAIN = "main"
}
export declare class ProductMediaVariant extends SoftDeletableEntity {
    product_media_id: string;
    variant_id: string;
    type: ProductMediaVariantType;
    private beforeInsert;
}
