import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import dbConnect from './config/mongoose.config.js' 
import countryRouter from './routes/country.routes.js'
import userRouter from './routes/user.routes.js'
import { notFoundError, normalizeErrors } from './util/errorhandling.js'
import { restartJobs } from './util/cycleReproduction.js'
import cookieParser from 'cookie-parser'
import authenticate from './config/jwt.config.js'

const app = express();
app.use( cookieParser( process.env.FIRST_SECRET_KEY) );
app.use( express.json(), cors( {credentials: true, origin: 'http://localhost:5173'} ) );
app.use( "/user/api", userRouter)
app.use( "/country/api", authenticate, countryRouter)
app.use( notFoundError );
app.use( normalizeErrors );
dotenv.config()
const PORT = process.env.PORT

dbConnect()
restartJobs();

app.listen(PORT, () =>{
    console.log(`Simulation Nation Project, Port: ${PORT}`)
})