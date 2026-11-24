import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.js';

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_ORIGIN }));
app.use('/api/auth',authRoutes);


// TODO: mount routes from ./routes

app.listen(PORT, () => console.log(`API listening on http://localhost:${PORT}`));
