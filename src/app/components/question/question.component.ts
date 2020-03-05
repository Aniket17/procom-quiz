import { Component, OnInit, Input } from "@angular/core";
import Question from "../../models/question";
import { StateService } from "src/app/services/state.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.css"]
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;

  constructor(private stateService: StateService) {}
  ngOnInit() {}
  onChange(questionForm: NgForm) {
    this.stateService.onFormChanged(questionForm.valid);
  }
}
