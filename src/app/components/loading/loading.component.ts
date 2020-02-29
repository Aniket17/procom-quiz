import { OnInit, Component, Input } from "@angular/core";

@Component({
  selector: "loading",
  templateUrl: "./loading.component.html",
  styleUrls: ["./loading.component.css"]
})
export class LoadingComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
  @Input() loading: boolean;
}
