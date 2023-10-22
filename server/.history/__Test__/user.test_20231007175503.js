// import request from "supertest";

// import User from "../models/User.js";
// import { connectToDatabase, closeConnect } from "../config/database.js";
// const app = "http://localhost:3000";
// let __token, __id;

// beforeAll(async () => {
//   const DB_URL =
//     "mongodb+srv://tahashabaan48:yNYtaACblVljY7o0@jobify.6kjbjqd.mongodb.net/?retryWrites=true&w=majority";
//   connectToDatabase(DB_URL);

//   const resSignUp = await request(app).post("/auth/signUp").send(user);
//   const res = await request(app).post("/auth/signIn").send(userIn);
//   __id = resSignUp.body._id;
//   __token = res.body.token;
// });
// afterAll(async () => {
//   // Delete or clear data before each test
//   await User.deleteMany({});
//   // Disconnect from the test database after all tests
//   closeConnect();
// });
// const userIn = {
//   email: "tahashabaan190@gmail.com",
//   password: "12345678",
// };

// const user = {
//   ...userIn,
//   fName: "taha",
//   lName: "shabaan",
// };

// describe("handle create user", () => {
//   it("check user created or not", async () => {
//     const res = await request(app)
//       .post("/user")
//       .set("Authorization", `Barear ${__token}`)
//       .send(user);
//     expect(res.status).toBe(201);
//   });

//   it("check user exist or not", async () => {
//     const res = await request(app)
//       .get("/user")
//       .set("Authorization", `Barear ${__token}`)
//       .send(user);
//     expect(res.status).toBe(201);
//   });
// });

// describe("handle  user by id", () => {
//   it("check user exist or not by id", async () => {
//     const res = await request(app)
//       .get(`/user/${__id}`)
//       .set("Authorization", `Barear ${__token}`);
//     expect(res.status).toBe(201);
//   });

//   it("check update user by id", async () => {
//     const res = await request(app)
//       .put(`/user/${__id}`)
//       .set("Authorization", `Barear ${__token}`)
//       .send({fName:'ali'});
//     expect(res.status).toBe(201);
//   });

//   it("check delete user by id", async () => {
//     const res = await request(app)
//       .delete(`/user/${__id}`)
//       .set("Authorization", `Barear ${__token}`);
//     expect(res.status).toBe(201);
//   });
// });
