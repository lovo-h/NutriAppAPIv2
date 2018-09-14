
export class InteractorFood {
    repoFood: RepoFood;


    oneFoodByNDBNo(ndbNo: string, callback: CallbackErrMapResult): void {
        this.repoFood.oneFoodByNDBNo(ndbNo, callback);
    }

    manyLongDescBySnippets(snippets: string[], callback: CallbackErrMapResult): void {
        this.repoFood.manyLongDescBySnippets(snippets, callback);
    }
}