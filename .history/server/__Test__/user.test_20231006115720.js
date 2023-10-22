import request from 'supertest';

const app = 'http://localhost:3000'

beforeAll(async () => {
    const userUP ={
        fName:'taha',
        lName:"shabaan",
        email:'tahashabaan190@gmail.com',
        password:'12345678'
    }

      await request(app).post('/auth/signUp').send()

       await request(app).post('/auth/signIn').send()
})

describe('handle create user', 
() => {
    it('check user created or not', async() => {
        await request(app).post('/user').set('Authorization', ).send()
    })
})


