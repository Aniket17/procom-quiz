import QuizConfiguration from "./quiz.configuration";
import Question from "./question";

export class Quiz {
  id: number;
  name: string;
  description: string;
  config: QuizConfiguration;
  questions: Question[];

  constructor(data: any) {
    if (data) {
      this.id = data.id;
      this.name = data.name;
      this.description = data.description;
      this.config = new QuizConfiguration(data.config);
      this.questions = [...data.questions];
      this.questions.forEach((v, i) => (v.index = i));
    }
  }
}
