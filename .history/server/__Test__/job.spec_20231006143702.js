import request from 'supertest'

import Job from "../models/Job.js";
import User from "../models/User.js";
import {connectToDatabase, closeConnect} from '../config/database.js';
let __tpken, __id;

beforeAll(async () =>{
    const DB_URL='mongodb+srv://tahashabaan48:yNYtaACblVljY7o0@jobify.6kjbjqd.mongodb.net/?retryWrites=true&w=majority'
        connectToDatabase(DB_URL);
        const resSignUp = await request(app).post("/auth/signUp").send(user);
  const res = await request(app).post("/auth/signIn").send(userIn);
  __id = resSignUp.body._id;
  __token = res.body.token;
})

afterAll(async () => {
    closeConnect()
})

describe('', () => {
    
});
