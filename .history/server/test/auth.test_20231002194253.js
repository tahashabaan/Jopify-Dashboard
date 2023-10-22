import {request} from 'supertest'

const app = process.env.URL_APP
describe('handle route authenicate', () => {

    it('singUp , post method', async() => {
       const res = await request(app).post('/signUp').send()
    })

    it('signIn , post method', async() => {
        
    })

    
});

// describe('handle route user/:id', () => {
    
    
// });





