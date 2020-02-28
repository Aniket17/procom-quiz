import Choice from "./choice";

export default class Question {
  id: number;
  content: string;
  questionTypeId: number;
  choices: Choice[];
  //internal use
  isAnswered: boolean;
  index: number;
  selected: any;

  constructor(data: any) {
    data = data || {};
    this.id = data.id;
    this.content = data.name;
    this.questionTypeId = data.questionTypeId;
    this.choices = [...data.choices];

    this.isAnswered = data.isAnswered;
    this.index = data.index;
    this.selected = data.selected;
  }
}
