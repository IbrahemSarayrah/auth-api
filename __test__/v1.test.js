'use strict';

const supertest = require('supertest');
require('../src/routes/v1')
const { server } = require('../src/server');
const req = supertest(server);

describe('test v1 routes /api/v1/food', () => {

    it( 'Invalid Model', async () => {

        const res = await req.get('/api/v1/123');
        expect(res.status).toBe('Invalid Model');
    });


    it('test test v1 getAll ', async () => {

        const res = await req.get('/api/v1/food');
        expect(res.status).toBe(200);
    });


    it('test test v1 getone ', async () => {

        const res = await req.get('/api/v1/food/1');
        expect(res.status).toBe(200);
    });

    it('test v1 post /api/v1/food', async () => {

        const res = await req.post('/api/v1/food').send({
            name: "apple",
            calories: "100",
            type: "fruit"
        });
        expect(res.status).toBe(201);
    });

    it('test v1 put /api/v1/food', async () => {

        const res = await req.put('/api/v1/food/1').send({
            name: "apple",
            calories: "100",
            type: "fruit"
        });

        expect(res.status).toBe(201);
    });

    it('test v1 delete ', async () => {

        const res = await req.delete('/api/v1/food/1');
        expect(res.status).toBe(200);
    });

    ///// clothes

    it('test  v1 getAll ', async () => {

        const res = await req.get('/api/v1/clothes');
        expect(res.status).toBe(200);
    });


    it('test  v1 getone ', async () => {

        const res = await req.get('/api/v1/clothes/1');
        expect(res.status).toBe(200);
    });

    it('test v1 post /api/v1/clothes', async () => {

        const res = await req.post('/api/v1/clothes').send({
            name:"t-shirt",
            color:"white",
            size:"L"
        });
        expect(res.status).toBe(201);
    });

    it('test v1 put /api/v1/clothes', async () => {

        const res = await req.put('/api/v1/clothes/1').send({
            name:"t-shirt",
            color:"white",
            size:"L"
        })
        expect(res.status).toBe(201);
    });

    it('test  v1 delete ', async () => {

        const res = await req.delete('/api/v1/clothes/1');
        expect(res.status).toBe(200);
    });

});