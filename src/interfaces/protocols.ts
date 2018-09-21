import { Response } from 'express';

export interface IHandlerDB {
  // TODO: maybe add params && callback function?
  query(queryStr: string): void;
}

  oneFoodByNDBNo(ndbNo: string, callback: CallbackErrMapResult): void;
export interface IInteractorFood {

  manyLongDescBySnippets(snippets: string[], callback: CallbackErrMapResult): void;
}

export interface IHandlerWebresponderJSON {
  success(res: Response, body: { [id: string]: any }): void;

  badRequest(res: Response): void;
}
