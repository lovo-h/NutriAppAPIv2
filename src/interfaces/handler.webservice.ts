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
    const snippets: string[] = snippet.split('_');
    this.interactorFood.manyLongDescBySnippets(snippets, (results: any[], err: Error) => {
      if (err !== undefined) {
        this.webResponder.badRequest(res);
        return;
      }

      this.webResponder.success(res, { data: results });
    });
  }

  public oneFoodItem(req: Request, res: Response) {
    // TODO: implement
  }
}
