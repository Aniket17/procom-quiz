import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { QuizComponent } from "./components/quiz/quiz.component";

const routes: Routes = [
  { path: "home", component: WelcomeComponent },
  { path: "quiz", component: QuizComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
