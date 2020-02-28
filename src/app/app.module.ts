import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { QuizComponent } from "./components/quiz/quiz.component";
import { TimerComponent } from "./components/timer/timer.component";
import { QuizToobarComponent } from "./components/quiz-toobar/quiz-toobar.component";
import { ResultComponent } from "./components/result/result.component";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { QuestionComponent } from "./components/question/question.component";
import { ReviewQuestionComponent } from "./components/review-question/review-question.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [
    AppComponent,
    WelcomeComponent,
    QuizComponent,
    TimerComponent,
    QuizToobarComponent,
    ResultComponent,
    QuestionComponent,
    ReviewQuestionComponent,
    NavbarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
