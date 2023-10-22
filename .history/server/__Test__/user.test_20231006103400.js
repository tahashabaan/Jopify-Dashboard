import request from 'supertest';

const app = 'http://localhost:3000/user'

beforeAll(async () => {
       await 
})

describe('handle create user', 
() => {
    it('check user created or not', async() => {
        await request(app).post('/').set('Authorization', ).send()
    })
})


