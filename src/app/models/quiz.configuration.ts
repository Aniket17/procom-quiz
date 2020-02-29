export default class QuizConfiguration {
  duration: number;
  autoMove: boolean;
  constructor(config) {
    config = config || {};
    this.duration = config.duration || 300;
    this.autoMove = config.autoMove || false;
  }
}
