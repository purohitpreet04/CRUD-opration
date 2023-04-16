import mongoose from "mongoose";

const Connection = async (username,password) =>{
    
    const DB_URL = `mongodb+srv://${username}:${password}@e-comm.wdszs91.mongodb.net/e-com`;
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology:true, useNewUrlParser:true})
        console.log('database connected')
    } catch (error) {
        console.log('Error in database',error)
    }

}
export default Connection;
