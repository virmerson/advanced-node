import express from 'express';
import { setRoutes } from './routes/enrollmentRoutes';

const app = express();
const port = 3000;

app.use(express.json());
setRoutes(app);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});