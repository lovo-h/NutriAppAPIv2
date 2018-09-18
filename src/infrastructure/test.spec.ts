import * as express from 'express';
import { initialize } from './routes';

describe('Example Test', () => {
  it('should run a test', (done) => {
    const app = express.default();
    initialize(app, null);

    // console.log(app._router.stack);

    const simpleMath = 10 + 5;
    expect(simpleMath).toEqual(15);
    done();
  });
});
