/// <reference types="qs" />
/// <reference types="express" />
import { z } from "zod";
declare const requestSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    file: z.ZodOptional<z.ZodString>;
    mime_type: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name?: string;
    file?: string;
    mime_type?: string;
}, {
    name?: string;
    file?: string;
    mime_type?: string;
}>;
export type AdminPostProductMediaProductMediaReq = z.infer<typeof requestSchema>;
declare const _default: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>[];
export default _default;
