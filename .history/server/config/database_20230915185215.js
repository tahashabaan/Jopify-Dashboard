import mongoose from 'mongoose';


export default const dmongoose.connect(process.env.DB_URL, () => {
    console.log('connect with altes database');
});