import supertest from 'supertest';
import { server } from '../index.js';
import { expect } from 'chai';

const request = supertest(server);

describe("API Test for User", () => {

    before(() => {
        console.log('1');
    });

    after(() => {
        console.log('4');
    });

    beforeEach(() => {
        console.log('2');
    });

    afterEach(() => {
        console.log('3');
    });

    it("Check invalid routes /error", async () => {
        const response = await request.get("/error");

        expect(response.status).to.eql(404);
        expect(response.body.message).to.eql("404 Not Found");
    });

    it("Create new user", async () => {
        const response = await request
            .post('/v1/users')
            .send({ first_name: 'Tahmid', last_name: 'Tanzim', email: 'tahmid.tanzim@gmail.com', date_of_birth: '1971-12-16' })
            .set('Accept', 'application/json');

        expect('Content-Type', /json/);
        expect(response.status).to.eq(201);
        expect(response.body.data.first_name).to.eql("Tahmid");
    });
});