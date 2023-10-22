import request from 'supertest'

iimport User from "../models/User.js";

import {connectToDatabase, closeConnect} from '../config/database.js';
