import { Component, OnInit, Input } from "@angular/core";
import { QuizService } from "../../services/quiz.service";
import { Quiz } from "../../models/quiz";
import Question from "../../models/question";
import { StateService } from "../../services/state.service";
import { Router } from "@angular/router";

@Component({
  selector: "quiz",
  templateUrl: "./quiz.component.html",
  styleUrls: ["./quiz.component.css"]
})
export class QuizComponent implements OnInit {
  constructor(
    private quizService: QuizService,
    private stateService: StateService,
    private router: Router
  ) {}

  @Input() quizId: number = 1; //defaulted
  quiz: Quiz;
  currentQuestion: Question;
  id: number = -1;
  duration: number = 120; //default but should read from config
  isReviewing: boolean;

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
    this.saveAnswer();
    this.currentQuestion = this.quiz.questions[++this.id];
  }

  getPreviousQuestion() {
    this.saveAnswer();
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
  review() {
    this.isReviewing = !this.isReviewing;
  }
  onReviewQuestionClick({ questionId }) {
    if (!questionId) return;
    this.currentQuestion = this.quiz.questions.find(x => x.id == questionId);
    this.id = this.currentQuestion.index;
    this.review();
  }
  submit() {
    let score = this.calculateScore(this.quiz.questions);
    this.stateService.setResult(score);
    this.router.navigate(["/result"]);
  }
  calculateScore(questions: Question[]) {
    let score = questions.filter(
      x => x.selected == x.choices.find(x => x.isCorrect).id
    ).length;
    return score;
  }
  saveAnswer() {
    if (!this.currentQuestion) return;
    //in case you want to save it to persistent storage
    this.quiz.questions[this.currentQuestion.index] = this.currentQuestion;
  }
}
