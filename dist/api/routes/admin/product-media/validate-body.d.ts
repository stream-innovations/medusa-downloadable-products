import { NextFunction, Request, Response } from "express";
import { z } from "zod";
export default function validateBody(schema: z.ZodSchema<any>): (req: Request, res: Response, next: NextFunction) => void;
