import mongoose from 'mongoose';


export default mongoose.connect(process.env.DB_URL, () => {
    console.log('connect with altes database');
});