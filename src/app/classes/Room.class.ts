import { stringify } from "querystring";

export class Room {
  description: String;
  directions: Array<String>;
  initialEvents: Array<{}>;

  constructor(description, directions) {
    this.description = description;
    this.directions = directions;
  }
}
