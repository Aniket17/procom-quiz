export default class Choice {
  id: number;
  questionId: number;
  content: string;
  isCorrect: boolean;
  selected: boolean;

  constructor(data: any) {
    [this.id, this.questionId, this.content, this.isCorrect, this.selected] = {
      ...data
    };
  }
}
