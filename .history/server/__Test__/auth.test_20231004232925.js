import request from 'supertest';

import 
import server  from '../app.js'



describe('handle route authenicate', () => {

    it('singUp , post method', async() => {
        await request(server).post('/signUp').send()
         expect(true).toBe(true)
    //    const res = await request(app).post('/signUp').send()
    })

    it('signIn , post method', async() => {
        
    })

    
});







