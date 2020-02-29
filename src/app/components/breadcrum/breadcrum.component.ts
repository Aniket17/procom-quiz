import { OnInit, Component, Input } from "@angular/core";

@Component({
  selector: "breadcrum",
  templateUrl: "./breadcrum.component.html"
})
export class BreadcrumComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
  @Input() pageTitle: string;
  @Input() pageParent: string;
}
