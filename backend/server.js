// import express from 'express';
// import dotenv from 'dotenv';

// import authRoutes from './routes/auth.routes.js';
// import messageRoutes from './routes/message.routes.js';
// import userRoutes from './routes/users.routes.js';

// import connectToMongoDB from './db/Connecttomongodb.js';
// import cookieParser from 'cookie-parser';
// import {app,server} from './socket/socket.js';

// const PORT = process.env.PORT || 5000


// app.use(express.json());
// app.use(cookieParser());
// dotenv.config();

// app.use("/api/auth", authRoutes);
// app.use("/api/messages", messageRoutes);
// app.use("/api/users", userRoutes);

// app.get('/', (req, res) => {
//     res.send('Hello Wordfdld')
// })
// server.listen(PORT , ()=> {
//     connectToMongoDB();
//     console.log(`Server is running on port ${PORT}`)
// })

import path from "path";
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/users.routes.js';

import connectToMongoDB from './db/Connecttomongodb.js';
import { app, server } from './socket/socket.js';

dotenv.config();

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);
app.use(express.static(path.join(__dirname,"/frontend/dist")))

app.get("*",(req,res)=>{
  res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})

app.get('/', (req, res) => {
  res.send('Hello World');
});

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
