/// <reference types="qs" />
/// <reference types="express" />
import { z } from "zod";
declare const requestSchema: z.ZodObject<{
    variant_id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    limit: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    offset: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    expand: z.ZodOptional<z.ZodArray<z.ZodEnum<["variants"]>, "many">>;
}, "strip", z.ZodTypeAny, {
    variant_id?: string | string[];
    limit?: number;
    offset?: number;
    expand?: "variants"[];
}, {
    variant_id?: string | string[];
    limit?: number;
    offset?: number;
    expand?: "variants"[];
}>;
export type ProductMediaListParams = z.infer<typeof requestSchema>;
declare const _default: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>[];
export default _default;
