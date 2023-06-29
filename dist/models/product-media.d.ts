import { SoftDeletableEntity } from "@medusajs/medusa";
export declare class ProductMedia extends SoftDeletableEntity {
    name: string;
    file: string;
    mime_type: string;
    private beforeInsert;
}
