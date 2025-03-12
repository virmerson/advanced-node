pnpm install
pnpm run build

pnpm start

docker-compose up --build

curl -X POST http://localhost:3000/enroll -H "Content-Type: application/json" -d '{"userId": "123", "courseId": "456"}'

Acesss the RabbitMQ website 
http://localhost:15672/


```sh
docker-compose up --build
```

Then, open your browser and navigate to `http://localhost:15672/`. Use the following credentials to log in:

- **Username:** guest
- **Password:** guest