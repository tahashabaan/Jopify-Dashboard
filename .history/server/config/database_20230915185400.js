import mongoose from 'mongoose';


 const database = () =>
  mongoose.connect(process.env.DB_URL, () => {
    console.log('connect with altes database');
});

export default 