import request from 'supertest';
import dotenv from 'dotenv'


dorenv.config({path:")

const app = process.env.URL_APP
describe('handle route authenicate', () => {

    it('singUp , post method', async() => {
        await request()
        expect(true).toBe(true)
    //    const res = await request(app).post('/signUp').send()
    })

    it('signIn , post method', async() => {
        
    })

    
});

// describe('handle route user/:id', () => {
    
    
// });





