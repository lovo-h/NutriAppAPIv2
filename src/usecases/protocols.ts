type CallbackErrMapResult = (err: Error, result: { [id: string]: string }) => void;

interface IRepoFood {
  oneFoodByNDBNo(ndbNo: string, callback: CallbackErrMapResult): void;

  manyLongDescBySnippets(snippets: string[], callback: CallbackErrMapResult): void;
}

interface IHandlerLogger {
  log(msg: string): Error;
}
