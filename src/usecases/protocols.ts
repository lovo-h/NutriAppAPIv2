
type CallbackErrMapResult = (err: Error, result: {[id: string]: string}) => void;

interface RepoFood {
    oneFoodByNDBNo(ndbNo: string, callback: CallbackErrMapResult): void
    manyLongDescBySnippets(snippets: string[], callback: CallbackErrMapResult): void
}

interface HandlerLogger {
    log(msg: string): Error
}