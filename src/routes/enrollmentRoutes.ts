// filepath: /Users/virmerson/dev/youtube/advanced-node/course-enrollment-system/src/routes/enrollmentRoute.ts
import { Application, Request, Response } from 'express';
import { enrollController } from '../controllers/enrollController';

export const setRoutes = (app: Application): void => {
    app.post('/enroll', enrollController);
}; 