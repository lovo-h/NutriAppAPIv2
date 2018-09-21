type CallbackResultErr = (results: any[], err: Error) => void;

interface IRepoFood {
  oneFoodByNDBNo(ndbNo: string, callback: CallbackResultErr): void;

  manyLongDescBySnippets(snippets: string[], callback: CallbackResultErr): void;
}

interface IHandlerLogger {
  log(msg: string): void;
}
