import { Request, Response } from 'express';
import { IHandlerWebresponderJSON, IInteractorFood } from './protocols';

export class HandlerWebservice {
  private interactorFood: IInteractorFood;
  private webResponder: IHandlerWebresponderJSON;

  constructor(webresponder: IHandlerWebresponderJSON, interactorFood: IInteractorFood) {
    this.interactorFood = interactorFood;
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
