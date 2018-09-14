import {Request, Response} from "express";
import {HandlerWebresponderJSON, InteractorFood} from "./protocols";


export class HandlerWebservice {
    interactorFood: InteractorFood;
    webResponder: HandlerWebresponderJSON;

    constructor(webresponder: HandlerWebresponderJSON) {
        this.webResponder = webresponder;
    }

    longDescs(req: Request, res: Response) {
        let snippet = req.params.snippet;
        this.webResponder.success(res, {'data': `${snippet}`});
    }

    oneFoodItem(req: Request, res: Response) {
        let ndbNo = req.params.ndb_no;
        this.webResponder.success(res, {'data': `${ndbNo}`});
    }
}
