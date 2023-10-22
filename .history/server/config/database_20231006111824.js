import mongoose from 'mongoose';


async function connectToDatabase() {
    try {
      await mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to the MongoDB database!');
    } catch (error) {
      console.error('Error connecting to the MongoDB database:', error);
    }
const closeConnect = async () => {
  await mongoose.connection.close();
}
export  {connectToDatabase};