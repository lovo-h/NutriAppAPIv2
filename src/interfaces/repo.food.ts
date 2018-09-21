import { IHandlerDB } from './protocols';

export class RepoFood {
  private handlerDB: IHandlerDB;

  constructor(handlerDB: IHandlerDB) {
    this.handlerDB = handlerDB;
  }

  public oneFoodByNDBNo(ndbNo: string, callback: CallbackResultErr) {
    // TODO: implement
  }

  public manyLongDescBySnippets(snippets: string[], callback: CallbackResultErr) {
    let likeStr = '';
    const queryParams: string[] = [];

    for (let idx = 0; idx < snippets.length; idx += 1) {
      queryParams.push(`%${snippets[idx]}%`);

      if (idx > 0) {
        likeStr += ` AND long_desc ILIKE $${idx + 1}`;
      }
    }

    const query = 'SELECT ndb_no, long_desc, fdgrp_cd, fdgrp_desc FROM food ' +
      `WHERE long_desc ILIKE $1${likeStr} LIMIT 10;`;
    this.handlerDB.query(query, queryParams, callback);
  }
}
