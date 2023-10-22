import request from 'supertest';
import dotenv from 'dotenv'
import database from '../config/database.js'


dotenv.config({path:''})


describe('handle route authenicate', () => {

    it('singUp , post method', async() => {
        await request(app).post('/signUp').send()
         expect(true).toBe(true)
    //    const res = await request(app).post('/signUp').send()
    })

    it('signIn , post method', async() => {
        
    })

    
});







