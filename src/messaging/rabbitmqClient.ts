import amqp from 'amqplib';

const RABBITMQ_URL = 'amqp://localhost';

export const connectRabbitMQ = async () => {
    try {
        const connection = await amqp.connect(RABBITMQ_URL);
        const channel = await connection.createChannel();
        console.log('Connected to RabbitMQ');
        return channel;
    } catch (error) {
        console.error('Failed to connect to RabbitMQ', error);
        throw error;
    }
};