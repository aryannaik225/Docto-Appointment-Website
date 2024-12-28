import mongoose from 'mongoose';

const connectDB = async () => {

    mongoose.connection.on('connected', () => console.log('Database Connected')) // sends a message to the console when the connection is successful

    await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`) // connects to the database named prescripto in the MongoDB cluster
}

export default connectDB;