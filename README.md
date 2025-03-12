# Course Enrolment API Node.js Project

This project demonstrates an advanced Node.js setup with multiple microservices and RabbitMQ for message queuing.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/)
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Getting Started

### Clone the Repository

```sh
git clone https://github.com/virmerson/course-enrolment-api.git
cd course-enrolment-api
```
### Install Dependencies
```pnpm install```

### Build the Project
```pnpm run build```

### Start the Project
```pnpm start```

### Run with Docker
### To run the project with Docker, use the following
### command:

```docker-compose up --build```

### Access the Application
Once the Docker containers are up and running, you can access the application and RabbitMQ management inte

## Getting Started

### Clone the Repository

```sh
git clone https://github.com/your-username/course-api.git
cd course-api
```

### Install Dependencies

```sh
pnpm install
```

### Build the Project

```sh
pnpm run build
```

### Start the Project

```sh
pnpm start
```

### Run with Docker

To run the project with Docker, use the following command:

```sh
docker-compose up --build
```

### Access the Application

Once the Docker containers are up and running, you can access the application and RabbitMQ management interface:

- **Application:** `http://localhost:3000`
- **RabbitMQ Management Interface:** `http://localhost:15672/`

### RabbitMQ Management Interface

To access the RabbitMQ management interface, open your browser and navigate to `http://localhost:15672/`. Use the following credentials to log in:

- **Username:** guest
- **Password:** guest

### Send a POST Request

You can send a POST request to enroll a user in a course using `curl`:

```sh
curl -X POST http://localhost:3000/enroll -H "Content-Type: application/json" -d '{"userId": "123", "courseId": "456"}'
```

## Reference

This project is developed and maintained by [High Tech Cursos](https://hightechcursos.com.br/).

## License

This project is licensed under the MIT License.
```

By following these steps, you will successfully rename your repository to `course-enrolment-api` and update all relevant references.