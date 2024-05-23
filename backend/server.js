import express from 'express';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/users.routes.js';

import connectToMongoDB from './db/Connecttomongodb.js';
import cookieParser from 'cookie-parser';

const PORT = process.env.PORT || 5000

const app = express();
app.use(express.json());
app.use(cookieParser());
dotenv.config();

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.get('/', (req, res) => {
    res.send('Hello Wordfdld')
})
app.listen(PORT , ()=> {
    connectToMongoDB();
    console.log(`Server is running on port ${PORT}`)
})