export class InteractorFood {
  private repoFood: IRepoFood;

  public oneFoodByNDBNo(ndbNo: string, callback: CallbackErrMapResult): void {
    this.repoFood.oneFoodByNDBNo(ndbNo, callback);
  }

  public manyLongDescBySnippets(snippets: string[], callback: CallbackErrMapResult): void {
    this.repoFood.manyLongDescBySnippets(snippets, callback);
  }
}
