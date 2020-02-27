export default class Option {
  id: number;
  questionId: number;
  name: string;
  isAnswer: boolean;
  selected: boolean;

  constructor(data: any) {
    [this.id, this.questionId, this.name, this.isAnswer, this.selected] = {
      ...data
    };
  }
}
