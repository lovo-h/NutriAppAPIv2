import {Express, Request, Response} from "express";

export function initialize(app: Express) {
    app.get('/api/long_descs/:snippet([a-zA-Z0-9&]{3,200})', (req: Request, res: Response) => {
        let snippet = req.params.snippet;
        res.send(`You entered ${snippet}`);
    });

    app.get('/api/foods/:ndb_no([0-9]{5})', (req, res) => {
        let ndbNo = req.params.ndb_no;
        res.send(`You entered ${ndbNo}`);
    });
}
