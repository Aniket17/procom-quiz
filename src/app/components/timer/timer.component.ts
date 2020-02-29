import { Component, OnInit, Input, Output, OnDestroy } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
  selector: "timer",
  templateUrl: "./timer.component.html"
})
export class TimerComponent implements OnInit, OnDestroy {
  timer: any = null;
  startTime: Date;
  endTime: Date;
  ellapsedTime = "00:00";

  @Input() duration: number = 70; //default value
  @Output() timerElapsed = new EventEmitter();
  constructor() {}

  ngOnInit() {
    this.startTime = new Date();
    this.ellapsedTime = "00:00";
    this.timer = setInterval(() => {
      this.tick();
    }, 1000);
  }
  ngOnDestroy() {
    clearInterval(this.timer);
  }
  tick() {
    const now = new Date();
    const diff = (now.getTime() - this.startTime.getTime()) / 1000;
    if (diff >= this.duration) {
      clearInterval(this.timer);
      this.timerElapsed.emit("timerElapsed");
    }
    this.ellapsedTime = this.parseTime(this.duration - diff);
  }

  parseTime(totalSeconds: number) {
    if (totalSeconds < 0) {
      return "00:00";
    }
    let mins: string | number = Math.floor(totalSeconds / 60);
    let secs: string | number = Math.round(totalSeconds % 60);
    mins = (mins < 10 ? "0" : "") + mins;
    secs = (secs < 10 ? "0" : "") + secs;
    return `${mins}:${secs}`;
  }
}
