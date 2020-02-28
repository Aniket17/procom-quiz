import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import Question from "../../models/question";

@Component({
  selector: "review-question",
  templateUrl: "./review-question.component.html",
  styleUrls: ["./review-question.component.css"]
})
export class ReviewQuestionComponent implements OnInit {
  @Input() question: Question;

  @Output() onQuestionClick = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  goToQuestion() {
    this.onQuestionClick.emit({ questionId: this.question.id });
  }
}
