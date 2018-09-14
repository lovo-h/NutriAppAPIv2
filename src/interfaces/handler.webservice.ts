import {Request, Response} from "express";

export class HandlerWebservice {

    longDescs(req: Request, res: Response) {
        let snippet = req.params.snippet;
        res.send(`You entered ${snippet}`);
    }

    oneFoodItem(req: Request, res: Response) {
        let ndbNo = req.params.ndb_no;
        res.send(`You entered ${ndbNo}`);
    }
}
