import { Pool, QueryResult } from 'pg';

export class HandlerCockroach {

  private pool: Pool;

  constructor(pool: Pool) {
    this.pool = pool;
  }

  public query(queryStr: string, params: any[], callback: CallbackResultErr) {
    const results: any[] = [];

    this.pool.query(queryStr, params, (err: Error, res: QueryResult) => {
      res.rows.forEach((val) => {
        results.push(val);
      });

      callback(results, err);
    });
  }

  public end() {
    this.pool.end();
  }
}

export function newHandlerCockroach(): HandlerCockroach {
  const config = {
    database: 'usdafooddb',
    host: 'cockroach',
    port: 26257,
    user: 'root',
  };

  return new HandlerCockroach(new Pool(config));
}
