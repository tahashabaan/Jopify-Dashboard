import request from "supertest";
import mongoose from "mongoose";

import User from "../models/User.js";
import { connectToDatabase, closeConnect } from "../config/database.js";

dotenv.config({ path: "../config.env" });
const app = "http://localhost:3000/auth";

beforeAll(async () => {
  // const DB_URL =
  //   "mongodb+srv://tahashabaan48:yNYtaACblVljY7o0@jobify.6kjbjqd.mongodb.net/testing";
  // connectToDatabase(DB_URL);
  // await User.deleteMany({});

  await mongoose

});

// afterAll(async () => {
//   // Delete or clear data before each test
//   await User.deleteMany({});
//   // Disconnect from the test database after all tests
//   closeConnect();
// });

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
    const res = await request(app).post("/signIn").send(user);
    expect(res.status).toBe(201);
  });
});
