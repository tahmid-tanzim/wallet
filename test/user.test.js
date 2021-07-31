import supertest from 'supertest';
import { server } from '../index.js';
import { expect } from 'chai';

const request = supertest(server);

describe("API Test for User", () => {
    it("return all users", async () => {
        const response = await request.get("/airports");

        expect(response.status).to.eql(404);
        expect(response.body.message).to.eql("404 Not Found");
    });
});