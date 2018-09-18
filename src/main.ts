import * as bodyParser from 'body-parser';
import * as express from 'express';
import { HandlerLogger } from './infrastructure/handler.logger';
import * as routes from './infrastructure/routes';
import { WebresponderJSON } from './infrastructure/webresponder.json';
import { HandlerWebservice } from './interfaces/handler.webservice';

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const main = express.default();
// Read JSON data from a request
main.use(bodyParser.json());
// Disable caching by the browser
main.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.setHeader('cache-control', 'private, max-age=0, no-cache, no-store, must-revalidate');
  res.setHeader('expires', '0');
  res.setHeader('pragma', 'no-cache');
  next();
});

const logger = new HandlerLogger();
const webresponderJSON = new WebresponderJSON();
const webservice = new HandlerWebservice(webresponderJSON);

routes.initialize(main, webservice);

main.listen(PORT, HOST, () => logger.log(`NutriApp API running on http://${HOST}:${PORT}`));
