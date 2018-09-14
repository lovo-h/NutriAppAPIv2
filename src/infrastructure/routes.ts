import {Express, Request, Response} from "express";
import {HandlerWebservice} from "../interfaces/handler.webservice";

export function initialize(app: Express, ws: HandlerWebservice) {
    app.get('/api/long_descs/:snippet([a-zA-Z0-9&]{3,200})', (req: Request, res: Response) => {
        ws.longDescs(req, res);
    });

    app.get('/api/foods/:ndb_no([0-9]{5})', (req, res) => {
        ws.oneFoodItem(req, res);
    });
}
