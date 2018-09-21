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
    this.repoFood.manyLongDescBySnippets(snippets, callback);
  }
}
