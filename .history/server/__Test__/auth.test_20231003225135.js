import request from 'supertest';
import dotenv from 'dotenv'


dotenv.config({path:"./config.env"})

const app = process.env.URL_APP

describe('handle route authenicate', () => {

    it('singUp , post method', async() => {
        await request(app).post('/signUp').send()
        expect(true).toBe(true)
    //    const res = await request(app).post('/signUp').send()
    })

    it('signIn , post method', async() => {
        
    })

    
});

// describe('handle route user/:id', () => {
    
    
// });





