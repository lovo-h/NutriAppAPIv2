export class InteractorFood {
  private repoFood: IRepoFood;
  private logger: IHandlerLogger;

  constructor(repoFood: IRepoFood, logger: IHandlerLogger) {
    this.repoFood = repoFood;
    this.logger = logger;
  }

  public oneFoodByNDBNo(ndbNo: string, callback: CallbackResultErr) {
    // TODO: implement
  }

  public manyLongDescBySnippets(snippets: string[], callback: CallbackResultErr) {
    this.logger.info(`InteractorFood.manyLongDescBySnippets: ${snippets}`);

    if (snippets === undefined || snippets === null || snippets.length === 0) {
      const errMsg = 'snippets needs at least one element';
      this.logger.error(`InteractorFood.manyLongDescBySnippets.Error: ${errMsg}`);
      callback(undefined, new Error(errMsg));
      return;
    }

    this.repoFood.manyLongDescBySnippets(snippets, callback);
  }
}
