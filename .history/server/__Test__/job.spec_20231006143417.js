import request from 'supertest'

import Job from "../models/User.js";
import {connectToDatabase, closeConnect} from '../config/database.js';


beforeAll(async () =>{
    const DB_URL='mongodb+srv://tahashabaan48:yNYtaACblVljY7o0@jobify.6kjbjqd.mongodb.net/?retryWrites=true&w=majority'
        connectToDatabase(DB_URL)
})

after