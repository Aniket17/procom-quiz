import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { QuizComponent } from "./components/quiz/quiz.component";
import { TimerComponent } from "./components/timer/timer.component";
import { QuizToobarComponent } from "./components/quiz-toobar/quiz-toobar.component";
import { ReviewQuestionsComponent } from "./components/review-questions/review-questions.component";
import { ResultComponent } from "./components/result/result.component";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    WelcomeComponent,
    QuizComponent,
    TimerComponent,
    QuizToobarComponent,
    ReviewQuestionsComponent,
    ResultComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
