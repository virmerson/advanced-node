import { connectRabbitMQ } from './rabbitmqClient';

export const sendMessage = async (queue: string, message: string) => {
    const channel = await connectRabbitMQ();
    await channel.assertQueue(queue, { durable: true });
    channel.sendToQueue(queue, Buffer.from(message));
    console.log(`Message sent to queue ${queue}: ${message}`);
};