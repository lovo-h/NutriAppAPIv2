import * as bodyParser from 'body-parser';
import * as express from 'express';
import { newHandlerCockroach } from './infrastructure/handler.cockroach';
import { HandlerLogger } from './infrastructure/handler.logger';
import * as routes from './infrastructure/routes';
import { WebresponderJSON } from './infrastructure/webresponder.json';
import { HandlerWebservice } from './interfaces/handler.webservice';
import { RepoFood } from './interfaces/repo.food';
import { InteractorFood } from './usecases/interactor.food';

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
const cockroachDB = newHandlerCockroach();
const repoFood = new RepoFood(cockroachDB);
const interactorFood = new InteractorFood(repoFood, logger);
const webresponderJSON = new WebresponderJSON();
const webservice = new HandlerWebservice(webresponderJSON, interactorFood);

routes.initialize(main, webservice);

const server = main.listen(PORT, HOST, () =>
  logger.log(`NutriApp API running on http://${HOST}:${PORT}`));

const gracefulShutdown = () => {
  server.close(() => {
    logger.log('Closed out remaining connections');
    cockroachDB.end();
    process.exit();
  });

  const second = 1000;

  setTimeout(() => {
    logger.log('Failed to close down connections in time, forcefully shutting down');
    cockroachDB.end();
    process.exit();
  },         10 * second);
};

// listen for TERM signal .e.g. kill
process.on('SIGTERM', gracefulShutdown);
// listen for INT signal e.g. Ctrl-C
process.on('SIGINT', gracefulShutdown);
