/// <reference types="qs" />
/// <reference types="express" />
import { z } from "zod";
declare const requestSchema: z.ZodObject<{
    name: z.ZodString;
    file: z.ZodString;
    mime_type: z.ZodString;
    product_variant: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        type: z.ZodEnum<["preview", "main"]>;
    }, "strip", z.ZodTypeAny, {
        id?: string;
        type?: "main" | "preview";
    }, {
        id?: string;
        type?: "main" | "preview";
    }>>;
}, "strip", z.ZodTypeAny, {
    name?: string;
    file?: string;
    mime_type?: string;
    product_variant?: {
        id?: string;
        type?: "main" | "preview";
    };
}, {
    name?: string;
    file?: string;
    mime_type?: string;
    product_variant?: {
        id?: string;
        type?: "main" | "preview";
    };
}>;
export type AdminPostProductMediaReq = z.infer<typeof requestSchema>;
declare const _default: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>[];
export default _default;
