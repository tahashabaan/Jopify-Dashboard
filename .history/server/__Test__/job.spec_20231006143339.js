import request from 'supertest'

import Job from "../models/User.js";
import {connectToDatabase, closeConnect} from '../config/database.js';


beforeAll()