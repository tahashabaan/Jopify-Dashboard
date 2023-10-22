import request from 'supertest';
import User from "../models/User.js";

// import server from '../app.js'
// import __dirname from '../utils/dirname.js'


const app = 'http://localhost:3000'

// afterEach(async () => {
//     await User.deleteMany({})
// })

describe('handle route authenicate signUp', () => {

    it('singUp , post method', async() => {
        const user ={
            fName:'taha',
            lName:"shabaan",
            email:'tahashabaan102@gmail.com',
            password:'12345678'
        }
       const res= await request(app).post('/signUp').send(user)
       console.log(res.body)
       expect(res.status).toEqual(404)
    //    const res = await request(app).post('/signUp').send()
    })


    
});


des






