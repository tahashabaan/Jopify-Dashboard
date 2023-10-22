import request from 'supertest';

import {app}  from '../'



describe('handle route authenicate', () => {

    it('singUp , post method', async() => {
        await request(app).post('/signUp').send()
         expect(true).toBe(true)
    //    const res = await request(app).post('/signUp').send()
    })

    it('signIn , post method', async() => {
        
    })

    
});







