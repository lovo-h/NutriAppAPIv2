import { Response } from 'express';

export class WebresponderJSON {

  public success(res: Response, body: { [id: string]: any }) {
    this.jsonResponse(res, body);
  }

  public badRequest(res: Response) {
    this.jsonResponse(res, { error: 'bad request sent' });
  }

  private jsonResponse(res: Response, body: { [id: string]: any }) {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(body));
  }
}
