import mongoose from 'mongoose';

const DBConnection = async () => {
    const MONODB_URI = `mongodb://riya:riya123@ac-se1lw5s-shard-00-00.1bplyg6.mongodb.net:27017,ac-se1lw5s-shard-00-01.1bplyg6.mongodb.net:27017,ac-se1lw5s-shard-00-02.1bplyg6.mongodb.net:27017/?ssl=true&replicaSet=atlas-11sh6u-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(MONODB_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error while connecting to the database', error.message);
    }
}

export default DBConnection;