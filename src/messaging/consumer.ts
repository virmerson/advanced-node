import { connectRabbitMQ } from './rabbitmqClient';

export const consumeMessages = async (queue: string) => {
    const channel = await connectRabbitMQ();
    await channel.assertQueue(queue, { durable: true });
    console.log(`Waiting for messages in queue ${queue}`);

    channel.consume(queue, (msg) => {
        if (msg !== null) {
            console.log(`Received message: ${msg.content.toString()}`);
            channel.ack(msg);
        }
    });
};