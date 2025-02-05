const request = require('supertest');
const app = require('./app');

describe('Calculator Routes', () => {
    let number1 = Math.floor(Math.random() * 1_000_000);
    let number2 = Math.floor(Math.random() * 1_000_000);

    test('GET /calculator/add => sum of numbers', () => {
        return request(app)
            .get(`/calculator/add?num1=${number1}&num2=${number2}`)

            .expect('Content-type', /json/)
            .expect(200)

            .then((response) => {
                expect(response.body).toEqual({
                    result: (number1 + number2)
                });
            });
    });

    test('GET /calculator/subtract => difference of numbers', () => {
        return request(app)
            .get(`/calculator/add?num1=${number1}&num2=${number2}`)

            .expect('Content-type', /json/)
            .expect(200)

            .then((response) => {
                expect(response.body).toEqual({
                    result: (number2 - number1)
                });
            });
    });

    test('GET /calculator/multiply => product of numbers', () => {
        return request(app)
            .get(`/calculator/add?num1=${number1}&num2=${number2}`)

            .expect('Content-type', /json/)
            .expect(200)

            .then((response) => {
                expect(response.body).toEqual({
                    result: (number1 * number2)
                });
            });
    });

    test('GET /calculator/divide => quotient of numbers', () => {
        return request(app)
            .get(`/calculator/add?num1=${number1}&num2=${number2}`)

            .expect('Content-type', /json/)
            .expect(200)

            .then((response) => {
                expect(response.body).toEqual({
                    result: (number2 / number1)
                });
            });
    });
    
})