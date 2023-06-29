/// <reference types="qs" />
/// <reference types="express" />
import { z } from "zod";
declare const requestSchema: z.ZodObject<{
    type: z.ZodEnum<["preview", "main"]>;
}, "strip", z.ZodTypeAny, {
    type?: "main" | "preview";
}, {
    type?: "main" | "preview";
}>;
export type AdminDeleteProductMediaProductMediaVariantsVariantReq = z.infer<typeof requestSchema>;
declare const _default: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>[];
export default _default;
