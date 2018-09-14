

const router = require('./routes');
const express = require('express');


describe('Example Test', () => {
    it('should run a test', function (done) {
        let app = express();
        router.initialize(app);

        // console.log(app._router.stack);

        let simpleMath = 10 + 5;
        expect(simpleMath).toEqual(15);
        done();
    });
});