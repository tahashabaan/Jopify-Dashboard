import request from 'supertest';

// import server from '../app.js'
// import __dirname from '../utils/dirname.js'


describe('handle route authenicate', () => {

    it('singUp , post method', async() => {
        const user ={
            fName:'taha',
            lName:"shabaan",
            email:'tahashabaan48@gmail.com',
            password:'12345678'
        }
       const res= await request('http://localhost:3000').post('/signUp').send(user)
       console.log()
       expect(res.status).toBe(201)
    //    const res = await request(app).post('/signUp').send()
    })

    it('signIn , post method', async() => {
        
    })

    
});







