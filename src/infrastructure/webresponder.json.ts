import {Response} from "express";

export class WebresponderJSON {

    _jsonResponse(res: Response, body: { [id: string]: any }) {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(body));
    }

    success(res: Response, body: { [id: string]: any }) {
        this._jsonResponse(res, body);
    }

    badRequest(res: Response) {
        this._jsonResponse(res, {'error': 'bad request sent'})
    }
}
