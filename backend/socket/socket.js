// import {Server} from 'socket.io';
// import http from 'http';
// import express from 'express';


// const app = express();

// const server = http.createServer(app);
// const io=new Server(server,{
//     cors:{
//         origin:"http://localhost:5173",
//         methods:["GET","POST"]
//     }
// })

// io.on('connection',(socket)=>{
//     console.log("a user connected",socket.id)

//     socket.on('disconnect',()=>{
//         console.log("user disconnected",socket.id)
//     })
// })

// export {app,io,server};

// import { Server } from "socket.io";
// import http from "http";
// import express from "express";

// const app = express();

// const server = http.createServer(app);
// const io = new Server(server, {
// 	cors: {
// 		origin: ["http://localhost:5174"],
// 		methods: ["GET", "POST"],
// 	},
// });

// export const getReceiverSocketId = (receiverId) => {
// 	return userSocketMap[receiverId];
// };

// const userSocketMap = {}; // {userId: socketId}

// io.on("connection", (socket) => {
// 	console.log("a user connected", socket.id);

// 	const userId = socket.handshake.query.userId;
// 	if (userId != "undefined") userSocketMap[userId] = socket.id;

// 	// io.emit() is used to send events to all the connected clients
// 	io.emit("getOnlineUsers", Object.keys(userSocketMap));

// 	// socket.on() is used to listen to the events. can be used both on client and server side
// 	socket.on("disconnect", () => {
// 		console.log("user disconnected", socket.id);
// 		delete userSocketMap[userId];
// 		io.emit("getOnlineUsers", Object.keys(userSocketMap));
// 	});
// });

// export { app, io, server };

import { Server } from 'socket.io';
import http from 'http';
import express from 'express';
import cors from 'cors';

const app = express();

// Use CORS middleware for Express
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests from this origin
  methods: ['GET', 'POST'],        // Allowed HTTP methods
  allowedHeaders: ['Content-Type'], // Allowed headers
  credentials: true                // Allow credentials
}));

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173', // Allow requests from this origin
    methods: ['GET', 'POST']
  }
});

const userSocketMap = {}; // {userId: socketId}

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

io.on('connection', (socket) => {
  console.log('a user connected', socket.id);

  const userId = socket.handshake.query.userId;
  if (userId != 'undefined') userSocketMap[userId] = socket.id;

  // io.emit() is used to send events to all the connected clients
  io.emit('getOnlineUsers', Object.keys(userSocketMap));

  // socket.on() is used to listen to the events. can be used both on client and server side
  socket.on('disconnect', () => {
    console.log('user disconnected', socket.id);
    delete userSocketMap[userId];
    io.emit('getOnlineUsers', Object.keys(userSocketMap));
  });
});

export { app, io, server };
