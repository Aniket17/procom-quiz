import { Component, OnInit, Input } from "@angular/core";
import { StateService } from "../../services/state.service";
import { Router } from "@angular/router";

@Component({
  selector: "result",
  templateUrl: "./result.component.html",
  styleUrls: ["./result.component.css"]
})
export class ResultComponent implements OnInit {
  constructor(private stateService: StateService, private router: Router) {}
  score: number;
  ngOnInit() {
    this.score = this.stateService.getResult();
    //when there is no score set.. go back to home.
    if (this.score === undefined) {
      this.router.navigate(["/home"]);
    }
  }
}
