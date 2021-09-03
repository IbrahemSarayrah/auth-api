'use strict';

const supertest = require('supertest');
require('../src/routes/v2')
const { server } = require('../src/server');
const req = supertest(server);
const { db, users } = require('../src/models/index');


let userInfo = {
    admin: { username: 'admin', password: 'password' , role: 'admin' },
  };
  
  // Pre-load our database with fake users
  beforeAll(async (done) => {
    await db.sync();
    await users.create(userInfo.admin);
    done();
  });
  afterAll(async (done) => {
    await db.drop();
    done();
  });

describe('test v2 routes /api/v2/food', () => {


    it( 'Invalid Model', async () => {

        const res = await req.get('/api/v2/123');
        expect(res.status).toBe('Invalid Model');
    });


    it('test v2 getAll ', async () => {
        
        const resToken = await req.post('/signin').auth('admin', 'password');
        const token = resToken.body.token;

        const res = await req.get('/api/v2/food').set('Authorization', `bearerAuth ${token}`);
        expect(res.status).toBe(200);
    });


    it('test v2 getone ', async () => {

        const resToken = await req.post('/signin').auth('admin', 'password');
        const token = resToken.body.token;

        const res = await req.get('/api/v2/food/1').set('Authorization', `bearerAuth ${token}`);
        expect(res.status).toBe(200);
    });

    it('test v2 post /api/v2/food', async () => {

        const resToken = await req.post('/signin').auth('admin', 'password');
        const token = resToken.body.token;

        const res = await req.post('/api/v2/food').send({
            name: 'apple',
            calories: '100',
            type: 'fruit'
        }).set('Authorization', `bearerAuth ${token}`);
        expect(res.status).toBe(201);
    });

    it('test v2 put /api/v2/food', async () => {

        const resToken = await req.post('/signin').auth('admin', 'password');
        const token = resToken.body.token;

        const res = await req.put('/api/v2/food/1').send({
            name: 'apple',
            calories: '100',
            type: 'fruit'
        }).set('Authorization', `bearerAuth ${token}`);

        expect(res.status).toBe(201);
    });

    it('test  v2 delete ', async () => {

        const resToken = await req.post('/signin').auth('admin', 'password');
        const token = resToken.body.token;

        const res = await req.delete('/api/v2/food/1').set('Authorization', `bearerAuth ${token}`);
        expect(res.status).toBe(200);
    });

    // // clothes

    it('test v2 getAll ', async () => {

        const resToken = await req.post('/signin').auth('admin', 'password');
        const token = resToken.body.token;

        const res = await req.get('/api/v2/clothes');
        expect(res.status).toBe(200).set('Authorization', `bearerAuth ${token}`);;
    })


    it('test test v2 getone ', async () => {
        
        const resToken = await req.post('/signin').auth('admin', 'password');
        const token = resToken.body.token;

        const res = await req.get('/api/v2/clothes/1');
        expect(res.status).toBe(200).set('Authorization', `bearerAuth ${token}`);
    });

    it('test v2 post /api/v2/clothes', async () => {

        const resToken = await req.post('/signin').auth('admin', 'password');
        const token = resToken.body.token;

        const res = await req.post('/api/v2/clothes').send({
            name:'t-shirt',
            color:'white',
            size:'L'
        }).set('Authorization', `bearerAuth ${token}`);
        expect(res.status).toBe(201);
    });

    it('test v2 put /api/v2/clothes', async () => {

        const resToken = await req.post('/signin').auth('admin', 'password');
        const token = resToken.body.token;

        const res = await req.put('/api/v2/clothes/1').send({
            name:'t-shirt',
            color:'white',
            size:'L'
        })
        expect(res.status).toBe(201).set('Authorization', `bearerAuth ${token}`);
    });

    it('test v2 delete ', async () => {

        const resToken = await req.post('/signin').auth('admin', 'password');
        const token = resToken.body.token;

        const res = await req.delete('/api/v2/clothes/1');
        expect(res.status).toBe(200).set('Authorization', `bearerAuth ${token}`);
    });

});