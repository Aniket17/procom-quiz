import Choice from "./choice";

export default class Question {
  id: number;
  content: string;
  questionTypeId: number;
  choices: Choice[];
  answered: boolean;

  constructor(data: any) {
    data = data || {};
    this.id = data.id;
    this.content = data.name;
    this.questionTypeId = data.questionTypeId;
    this.choices = [...data.choices];
  }
}
