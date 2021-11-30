// src/middleware/error.middleware.ts

import HttpException from "../common/http-exception";
import { Request, Response, NextFunction, response } from "express";

export const errorHandler = (
    error: HttpException,
    Request: Request,
    Response: Response,
    next: NextFunction
) => {
    const status = error.statusCode || error.status || 500;

    response.status(status).send(error);
};