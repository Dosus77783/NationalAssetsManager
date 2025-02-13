import { connect } from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const MONGO_URI = process.env.MONGO_URI

const dbConnect = async () =>{
    try{
        connect( MONGO_URI, { dbName: 'SimulationNation_Worlds'});
        console.log("Pinged Simulation Nation Deployment. Connection to MongoDB was successful")
    }
    catch(error){ `DB Connection Failed: ${error}` }
}

export default dbConnect 