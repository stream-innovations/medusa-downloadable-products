/// <reference types="qs" />
import { Request, Response } from "express";
import { z } from "zod";
declare const requestSchema: z.ZodObject<{
    variant_id: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodArray<z.ZodString, "many">]>>;
    name: z.ZodOptional<z.ZodString>;
    mime_type: z.ZodOptional<z.ZodString>;
    q: z.ZodOptional<z.ZodString>;
    file: z.ZodOptional<z.ZodString>;
    limit: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    offset: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    expand: z.ZodOptional<z.ZodArray<z.ZodEnum<["variants"]>, "many">>;
}, "strip", z.ZodTypeAny, {
    variant_id?: string | string[];
    name?: string;
    mime_type?: string;
    q?: string;
    file?: string;
    limit?: number;
    offset?: number;
    expand?: "variants"[];
}, {
    variant_id?: string | string[];
    name?: string;
    mime_type?: string;
    q?: string;
    file?: string;
    limit?: number;
    offset?: number;
    expand?: "variants"[];
}>;
export type ProductMediaListParams = z.infer<typeof requestSchema>;
declare const _default: ((req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>, next: import("express").NextFunction) => void)[];
export default _default;
