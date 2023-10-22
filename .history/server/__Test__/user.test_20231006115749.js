import request from 'supertest';

const app = 'http://localhost:3000'

beforeAll(async () => {
    const userIn = {
    
    const userUP ={
        ...userIn,
        fName:'taha',
        lName:"shabaan",
       
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


