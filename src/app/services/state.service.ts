import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class StateService {
  private formSubject$ = new BehaviorSubject<boolean>(false);
  public formSubjectObservable$: Observable<boolean>;

  constructor() {
    this.formSubjectObservable$ = this.formSubject$.asObservable();
  }

  private state: any = {};
  setResult(score) {
    this.state.score = score;
  }
  getResult() {
    return this.state.score;
  }
  onFormChanged(validity: boolean) {
    console.log(validity);
    this.formSubject$.next(validity);
  }
}
