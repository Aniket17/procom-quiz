import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class StateService {
  constructor() {}
  private state: any = {};
  setResult(score) {
    this.state.score = score;
  }
  getResult() {
    return this.state.score;
  }
}
