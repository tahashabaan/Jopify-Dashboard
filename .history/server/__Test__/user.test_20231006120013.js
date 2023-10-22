import request from 'supertest';

const app = 'http://localhost:3000'

beforeAll(async () => {
    const userIn = {
        email:'tahashabaan190@gmail.com',
        password:'12345678'
    }

    const userUP ={
        ...userIn,
        fName:'taha',
        lName:"shabaan",
       
    }

      await request(app).post('/auth/signUp').send(userUp)

     const res = await request(app).post('/auth/signIn').send(UserIn)
     
})

describe('handle create user', 
() => {
    it('check user created or not', async() => {
        await request(app).post('/user').set('Authorization', ).send()
    })
})


