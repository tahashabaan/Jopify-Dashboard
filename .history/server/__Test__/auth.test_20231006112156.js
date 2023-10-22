import request from 'supertest';

import User from "../models/User.js";
import {connectToDatabase, closeConnect} from '../config/database.js';

const app = 'http://localhost:3000/auth'

beforeAll(async () => {
    connectToDatabase()
  });
  
  afterAll(async () => {
    // Disconnect from the test database after all tests
    await mongoose.connection.close();
  });

beforeEach(async () => {
    // Seed data before each test
    await User.create({ /* data to be inserted */ });
  });
  

describe('handle authenicate signUp', 
() => {
    const user ={
        fName:'taha',
        lName:"shabaan",
        email:'tahashabaan102@gmail.com',
        password:'12345678'
    }

    it('check user is exist ', async () => {
        const t = () => {
            throw new TypeError();
          };
          expect(t).toThrow(TypeError);
    })

    it('singUp , post method', async() => {
            const res= await request(app).post('/signUp').send(user)
            expect(res.status).toBe(201)
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






