import { Request, Response } from 'express';
import { HandlerWebresponderJSON, InteractorFood } from './protocols';

export class HandlerWebservice {
  private interactorFood: InteractorFood;
  private webResponder: HandlerWebresponderJSON;

  constructor(webresponder: HandlerWebresponderJSON) {
    this.webResponder = webresponder;
  }

  public longDescs(req: Request, res: Response) {
    const snippet = req.params.snippet;
    this.webResponder.success(res, { data: `${snippet}` });
  }

  public oneFoodItem(req: Request, res: Response) {
    const ndbNo = req.params.ndb_no;
    this.webResponder.success(res, { data: `${ndbNo}` });
  }
}
