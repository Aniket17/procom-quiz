import { Component, OnInit, Input } from "@angular/core";
import Question from "../../models/question";

@Component({
  selector: "question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.css"]
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;

  constructor() {}
  ngOnInit() {}
}
