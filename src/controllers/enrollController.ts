import { Request, Response } from 'express';
import { sendMessage } from '../messaging/producer';

export const enrollController = async (req: Request, res: Response): Promise<void> => {
    const { userId, courseId } = req.body;
    const message = JSON.stringify({ userId, courseId });
    await sendMessage('enrollmentQueue', message);
    res.send('Enrollment request received');
};