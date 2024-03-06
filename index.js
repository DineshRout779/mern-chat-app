const dotnev = require('dotenv');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { createServer } = require('http');
const { Server } = require('socket.io');
const authRoutes = require('./routes/authRoutes');
const messageRoutes = require('./routes/messageRoute');
const connectDB = require('./configs/db');

dotnev.config();

// app initialization
const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

// setup middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Database connection
connectDB();

// routes
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

// socket transmission
io.on('connection', (socket) => {
  console.log('User connected ✅');

  socket.on('chat message', async (data) => {
    console.log('message:', data);

    // Broadcast the message to all connected clients
    io.emit('chat message', msg);
  });

  // Handle room join
  socket.on('joinRoom', (room) => {
    socket.join(room);
    console.log(`Socket ${socket.id} joined room: ${room}`);
    io.to(room).emit('roomJoined', `Joined room: ${room}`);
  });

  // Handle user disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected ❌');
  });
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
