import { connect } from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const MONGO_URI = process.env.MONGO_URI

const dbConnect = async () =>{
    try{
        connect( MONGO_URI, { dbName: 'NAM_Entities'});
        console.log("Pinged National Assets Manager Deployment. Connection to MongoDB was successful")
    }
    catch(error){ `DB Connection Failed: ${error}` }
}

export default dbConnect 