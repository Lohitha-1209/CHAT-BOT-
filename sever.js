// backend/server.js
import express from "express"
import { createServer } from "http"
import { Server } from "socket.io"
import cors from "cors"
import { v4 as uuidv4 } from "uuid" // For generating unique IDs

const app = express()
const httpServer = createServer(app)

// Enable CORS for all origins (adjust for production)
app.use(
  cors({
    origin: "*", // Allow all origins for development
    methods: ["GET", "POST"],
  }),
)

const io = new Server(httpServer, {
  cors: {
    origin: "*", // Allow all origins for Socket.IO connections
    methods: ["GET", "POST"],
  },
})

const PORT = process.env.PORT || 3001

let onlineUsers = [] // { id: socket.id, username: string }

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`)

  // Handle user joining the chat
  socket.on("user_joined", (username) => {
    const newUser = { id: socket.id, username }
    // Add user if not already in the list (e.g., reconnect)
    if (!onlineUsers.some((user) => user.id === socket.id)) {
      onlineUsers.push(newUser)
    }
    io.emit("online_users", onlineUsers) // Broadcast updated user list to all clients
    console.log(`${username} (${socket.id}) joined. Online users: ${onlineUsers.length}`)
  })

  // Handle incoming messages
  socket.on("message", (data) => {
    const message = {
      id: uuidv4(), // Unique ID for the message
      sender: data.sender,
      content: data.content,
      timestamp: new Date().toISOString(),
    }
    io.emit("message", message) // Broadcast message to all connected clients
    console.log(`Message from ${data.sender}: ${data.content}`)
  })

  // Handle typing indicator
  socket.on("typing", (username) => {
    socket.broadcast.emit("typing", username) // Broadcast to all *other* clients
  })

  // Handle stop typing indicator
  socket.on("stop_typing", (username) => {
    socket.broadcast.emit("stop_typing", username) // Broadcast to all *other* clients
  })

  // Handle user leaving the chat (e.g., logout button click)
  socket.on("user_left", (username) => {
    onlineUsers = onlineUsers.filter((user) => user.id !== socket.id)
    io.emit("online_users", onlineUsers) // Broadcast updated user list
    console.log(`${username} (${socket.id}) left. Online users: ${onlineUsers.length}`)
  })

  // Handle disconnection
  socket.on("disconnect", () => {
    const disconnectedUser = onlineUsers.find((user) => user.id === socket.id)
    onlineUsers = onlineUsers.filter((user) => user.id !== socket.id)
    io.emit("online_users", onlineUsers) // Broadcast updated user list
    if (disconnectedUser) {
      console.log(`User disconnected: ${disconnectedUser.username} (${socket.id}). Online users: ${onlineUsers.length}`)
      socket.broadcast.emit("stop_typing", disconnectedUser.username) // Ensure typing indicator is removed
    } else {
      console.log(`User disconnected: ${socket.id}. Online users: ${onlineUsers.length}`)
    }
  })
})

httpServer.listen(PORT, () => {
  console.log(`Socket.IO server running on port ${PORT}`)
})
