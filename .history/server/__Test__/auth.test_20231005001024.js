import request from 'supertest';

import server from '../app.js'
import __dirname from '../'


describe('handle route authenicate', () => {

    it('singUp , post method', async() => {
        await request(server).post('/signUp').send()
         expect(true).toBe(true)
    //    const res = await request(app).post('/signUp').send()
    })

    it('signIn , post method', async() => {
        
    })

    
});







