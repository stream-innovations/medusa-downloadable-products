import { NextFunction, Request, Response } from "express";
import { z } from "zod";
export default function validateQuery(schema: z.ZodSchema<any>): (req: Request, res: Response, next: NextFunction) => void;
