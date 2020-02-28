import { Component, OnInit, Input } from "@angular/core";
import { QuizService } from "../../services/quiz.service";
import { Quiz } from "../../models/quiz";
import Question from "../../models/question";

@Component({
  selector: "quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"]
})
export class QuizComponent implements OnInit {
  constructor(private quizService: QuizService) {}

  @Input() quizId: number = 1; //defaulted
  quiz: Quiz;
  currentQuestion: Question;
  id: number = -1;
  duration: number = 10;
  ngOnInit() {
    this.loadQuiz(this.quizId);
  }
  async loadQuiz(quizId: number) {
    try {
      let resp = await this.quizService.getQuiz(quizId);
      this.quiz = new Quiz(resp);
      this.getNextQuestion();
    } catch (error) {
      console.log(error);
    }
  }

  getNextQuestion() {
    this.currentQuestion = this.quiz.questions[++this.id];
  }

  getPreviousQuestion() {
    this.currentQuestion = this.quiz.questions[--this.id];
  }
  disableNext() {
    return (
      !this.quiz ||
      !this.quiz.questions ||
      this.id >= this.quiz.questions.length - 1
    );
  }
  disablePrevious() {
    return !this.quiz || !this.quiz.questions || this.id <= 0;
  }
  review($event) {
    if ($event.isReviwing) {
      //
    } else {
      //
    }
  }
  submit() {}
  saveAnswer() {
    //in case you want to save it to persistent storage
  }
}
