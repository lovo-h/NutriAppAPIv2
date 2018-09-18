import { Response } from 'express';

export interface IHandlerDB {
  // TODO: maybe add params && callback function?
  query(queryStr: string): void;
}

export interface InteractorFood {
  oneFoodByNDBNo(ndbNo: string, callback: CallbackErrMapResult): void;

  manyLongDescBySnippets(snippets: string[], callback: CallbackErrMapResult): void;
}

export interface IHandlerWebresponderJSON {
  success(res: Response, body: { [id: string]: any }): void;

  badRequest(res: Response): void;
}
