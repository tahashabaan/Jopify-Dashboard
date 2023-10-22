import request from 'supertest';

const app = 'http://localhost:3000'

let __token;

const userIn = {
        email:'tahashabaan190@gmail.com',
        password:'12345678'
    }

    const user ={
        ...userIn,
        fName:'taha',
        lName:"shabaan",
       
    }

beforeAll(async () => {
    

      await request(app).post('/auth/signUp').send(user)

     const res = await request(app).post('/auth/signIn').send(userIn);
     __token=res.body.token;
})

describe('handle create user', 
() => {
    it('check user created or not', async() => {
        await request(app).post('/user').set('Authorization', `Barear ${__token}`).send(user)
    })
})


