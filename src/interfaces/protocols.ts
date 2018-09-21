import { Response } from 'express';

export interface IHandlerDB {
  // TODO: maybe add params && callback function?
  query(queryStr: string): void;
}

export interface IInteractorFood {
  oneFoodByNDBNo(ndbNo: string, callback: CallbackResultErr): void;

  manyLongDescBySnippets(snippets: string[], callback: CallbackResultErr): void;
}

export interface IHandlerWebresponderJSON {
  success(res: Response, body: { [id: string]: any }): void;

  badRequest(res: Response): void;
}
