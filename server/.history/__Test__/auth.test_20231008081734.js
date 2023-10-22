import request from "supertest";
import dotenv from 'dotenv'

import User from "../models/User.js";
import { connectToDatabase, closeConnect } from "../db/database.js";

// dotenv.config({path: "../config/config.env"})
const app = process.env.URL_APP

beforeAll( async () => {
  const DB_URL = process.env.DB_URL;
  connectToDatabase(DB_URL);
});

afterAll(async() => {
  closeConnect();
})

beforeEach(async () => {
  await User.deleteMany({});
});

describe("handle authenicate signUp", () => {
  const user = {
    fName: "taha",
    lName: "shabaan",
    email: "tahashabaan190@gmail.com",
    password: "12345678",
  };

  it("check user is exist ", async () => {
    const t = () => {
      throw new TypeError("user exists alreedy...LogIn");
    };
    expect(t).toThrow(TypeError);
  });

  it("singUp , post method", async () => {
    const res = await request(app).post("/signUp").send(user);
    expect(res.status).toBe(201);
  });
});

describe("handle authanticate signIn", () => {
  it("check user is exist ", async () => {
    const t = () => {
      throw new TypeError("user not exists alreedy...SignUP");
    };
    expect(t).toThrow(TypeError);
  });

  it("signIn , post method", async () => {
    const user = {
      email: "tahashabaan190@gmail.com",
      password: "12345678",
    };
    const res = await request(app).post("au/signIn").send(user);
    expect(res.status).toBe(201);
  });
});
