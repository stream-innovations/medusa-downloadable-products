/// <reference types="qs" />
/// <reference types="express" />
import { z } from "zod";
declare const requestSchema: z.ZodObject<{
    variant_id: z.ZodString;
    type: z.ZodEnum<["preview", "main"]>;
}, "strip", z.ZodTypeAny, {
    variant_id?: string;
    type?: "main" | "preview";
}, {
    variant_id?: string;
    type?: "main" | "preview";
}>;
export type AdminPostProductMediaProductMediaVariantsReq = z.infer<typeof requestSchema>;
declare const _default: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>[];
export default _default;
