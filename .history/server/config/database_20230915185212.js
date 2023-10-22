import mongoose from 'mongoose';


export default consmongoose.connect(process.env.DB_URL, () => {
    console.log('connect with altes database');
});