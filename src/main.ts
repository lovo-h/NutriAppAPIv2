import {NextFunction, Request, Response} from "express";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as routes from "./infrastructure/routes";


// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const main = express.default();
// Read JSON data from a request
main.use(bodyParser.json());
// Disable caching by the browser
main.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('cache-control', 'private, max-age=0, no-cache, no-store, must-revalidate');
    res.setHeader('expires', '0');
    res.setHeader('pragma', 'no-cache');
    next();
});

routes.initialize(main);


main.listen(PORT, HOST, () => console.log(`NutriApp API running on http://${HOST}:${PORT}`));
