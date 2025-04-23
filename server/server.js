import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import dbConnect from './config/mongoose.config.js' 
import http from 'http'
import { Server } from 'socket.io'
import countryRouter from './routes/country.routes.js'
import userRouter from './routes/user.routes.js'
import { notFoundError, normalizeErrors } from './util/errorhandling.js'
import { restartJobs } from './util/cycleReproduction.js'
import cookieParser from 'cookie-parser'
import authenticate from './config/jwt.config.js'

const app = express();
app.use( cookieParser( process.env.FIRST_SECRET_KEY) );
app.use( express.json(), cors( {credentials: true, origin: 'http://localhost:5173'} ) );
app.use( "/user/api", userRouter);
app.use( "/country/api", authenticate, countryRouter);
app.use( notFoundError );
app.use( normalizeErrors );
dotenv.config()
const expressServer = http.createServer(app);
const PORT = process.env.PORT;
const socketio = new Server(expressServer, {
    cors:{
        origin:'http://localhost:5173',
        methods: ["GET", "POST"]
    }
})
socketio.on( "connection", (socket) =>{
    console.log("Client Connected: ", socket.id)
    socket.emit("welcome", "Welcome to the Server.")
    socket.on("disconnect", () => console.log("Client Disconnected: ", socket.id))
});

dbConnect();
restartJobs();

expressServer.listen(PORT, () =>{
    console.log(`National Assets Manager, Port: ${PORT}`)
});