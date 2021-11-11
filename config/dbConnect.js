import mongoose from "mongoose"

const connection = {};

async function dbConnect(){
    if(connection.isConnected){
        console.log("Database is already connected");
        return;
    }
    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    connection.isConnected = db.connections[0].readyState;
    console.log(connection.isConnected + "connected");
}

export default dbConnect