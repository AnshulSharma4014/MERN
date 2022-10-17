import express from 'express';
import cors from 'cors';
import restaurants from './api/restaurants.route.js';

//* Init app
const app = express();

//* Middleware
app.use(cors());
app.use(express.json());

//* Initial Route (Database routes are in other file)
app.use('/api/v1/restaurants', restaurants);    //* Initial route, (e.g.) localhost:5000/api/v1/restaurants => homepage
app.use('*', (req, res) => res.status(400).json({ error: 'Not found!' }));  //* Any other route other than mentioned in the routes file

export default app;