import mongoose from 'mongoose';


export default const damongoose.connect(process.env.DB_URL, () => {
    console.log('connect with altes database');
});