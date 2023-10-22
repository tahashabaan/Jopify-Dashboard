import request from 'supertest';
import User from "../models/User.js";

// import server from '../app.js'
// import __dirname from '../utils/dirname.js'


const app = 'http://localhost:3000/auth'

afterEach(async () => {
    await User.deleteMany({})
})

describe('handle authenicate signUp', 
() => {
    const user ={
        fName:'taha',
        lName:"shabaan",
        email:'tahashabaan102@gmail.com',
        password:'12345678'
    }

    // it('check user is exist ', async () => {
    //     const res = await request(app).post('/signUp').send(user)
    //     expect(res.status).toThrow()
    // })

    it('singUp , post method', async() => {
        try{
            const res= await request(app).post('/signUp').send(user)
            expect(res.status).toBe(201)
          } catch(error){
           expect(error.statusCode).toBe(402)
        }
     
    })


    
});


describe('handle authanticate signIn',
  () => {
    it('signIn , post method', async() => {
        const user = {
        email:"tahashabaan102@gmail.com",
        password:"12345678"
        }
        const res=  await request(app).post('/signIn').send(user)
        expect(res.status).toBe(201)
    })
})






