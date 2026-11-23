import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CLIENT_ORIGIN }));
app.use(express.json());

// TODO: mount routes from ./routes

app.listen(PORT, () => console.log(`API listening on http://localhost:${PORT}`));
