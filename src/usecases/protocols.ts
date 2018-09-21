type CallbackResultErr = (results: any[], err: Error) => void;

interface IRepoFood {
  oneFoodByNDBNo(ndbNo: string, callback: CallbackResultErr): void;

  manyLongDescBySnippets(snippets: string[], callback: CallbackResultErr): void;
}

interface IHandlerLogger {
  info(logMessage: string): void;
  error(logMessage: string): void;
}
