import request from 'supertest';
import User from "../models/User.js";

// import server from '../app.js'
// import __dirname from '../utils/dirname.js'
afterEach(async () => {
    User.dele
})

describe('handle route authenicate', () => {

    it('singUp , post method', async() => {
        const user ={
            fName:'taha',
            lName:"shabaan",
            email:'tahashabaan102@gmail.com',
            password:'12345678'
        }
       const res= await request('http://localhost:3000').post('/signUp').send(user)
       console.log(res.body)
       expect(res.status).toEqual(404)
    //    const res = await request(app).post('/signUp').send()
    })

    it('signIn , post method', async() => {
        
    })

    
});







