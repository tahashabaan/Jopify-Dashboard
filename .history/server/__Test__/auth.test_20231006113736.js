import request from 'supertest';
import dotenv from 'dotenv'

import User from "../models/User.js";
import {connectToDatabase, closeConnect} from '../config/database.js';

dotenv.config({path:'../config.env'})
const app = 'http://localhost:3000/auth'

conso

// beforeAll(async () => {
//     const URL = process.env.URL_APP
//     connectToDatabase(URL)
//   });
  
//   afterAll(async () => {
//     // Disconnect from the test database after all tests
//     closeConnect()
//   });

//   beforeEach(async () => {
//     // Delete or clear data before each test
//     await User.deleteMany({});
//   });
 

  

// describe('handle authenicate signUp', 
// () => {
//     const user ={
//         fName:'taha',
//         lName:"shabaan",
//         email:'tahashabaan102@gmail.com',
//         password:'12345678'
//     }

//     it('check user is exist ', async () => {
//         const t = () => {
//             throw new TypeError("user exists alreedy...LogIn");
//           };
//           expect(t).toThrow(TypeError);
//     })

//     it('singUp , post method', async() => {
//             const res= await request(app).post('/signUp').send(user)
//             expect(res.status).toBe(201)
//     })


    
// });


// describe('handle authanticate signIn',
//   () => {
//     it('signIn , post method', async() => {
//         const user = {
//         email:"tahashabaan102@gmail.com",
//         password:"12345678"
//         }
//         const res=  await request(app).post('/signIn').send(user)
//         expect(res.status).toBe(201)
//     })
// })






