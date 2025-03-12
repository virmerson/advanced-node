import { Application, Request, Response } from 'express';
import { enrollController } from '../controllers/enrollController';

export const setRoutes = (app: Application): void => {
    app.post('/enroll', enrollController);
}; 