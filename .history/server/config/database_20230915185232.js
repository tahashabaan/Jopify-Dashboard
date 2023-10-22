import mongoose from 'mongoose';


export default const database = () =>
  mongoose.connect(process.env.DB_URL, () => {
    console.log('connect with altes database');
});