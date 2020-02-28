import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "quiz-toobar",
  templateUrl: "./quiz-toobar.component.html"
})
export class QuizToobarComponent implements OnInit {
  @Output() onNext = new EventEmitter();
  @Output() onPrevious = new EventEmitter();
  @Output() onReview = new EventEmitter();
  @Output() onSubmit = new EventEmitter();

  @Input() nextDisabled: boolean;
  @Input() prevDisabled: boolean;
  isReviewing: boolean = false;
  constructor() {}
  ngOnInit() {}

  next() {
    this.onNext.emit("next");
  }
  previous() {
    this.onPrevious.emit("previous");
  }
  review() {
    this.isReviewing = !this.isReviewing;
    this.onReview.emit({ isReviewing: this.isReviewing });
  }
  submit() {
    this.onSubmit.emit();
  }
}
