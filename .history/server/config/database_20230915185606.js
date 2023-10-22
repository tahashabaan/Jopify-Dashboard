import mongoose from 'mongoose';


 const database = () =>
  mongoose.connect(process.env.DB_URL, {seNewUrlParser: true,
    useUnifiedTopology:} true, () => {
    console.log('connect with altes database');
});

export default database;