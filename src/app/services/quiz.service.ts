import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class QuizService {
  constructor(private http: HttpClient) {}
  getQuiz(quizId: number) {
    return this.http.get(`data/${quizId}.json`).toPromise();
  }
}
