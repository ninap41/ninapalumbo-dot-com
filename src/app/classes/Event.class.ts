export class Event {
  type: string;
  description: Array<string>;

  constructor(type) {
    if (type === "item") {
      this.type = type;
    }
  }
}
