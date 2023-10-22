import mongoose from 'mongoose';


async function connectToDatabase() {
    try {
      await mongoose.connect(pro, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to the MongoDB database!');
    } catch (error) {
      console.error('Error connecting to the MongoDB database:', error);
    }
  }
export default connectToDatabase;