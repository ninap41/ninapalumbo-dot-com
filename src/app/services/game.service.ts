import { Injectable, ErrorHandler } from "@angular/core";
import { questions, alternateQuestions } from "../json/questions.json";
import { game } from "../json/game.json";
import { Questionaire } from "../classes/Questionaire.class";
import { Character } from "../classes/Character.class";
import { StorageService } from "./storage.service";

@Injectable({
  providedIn: "root",
})
export class GameService {
  gameStart: boolean = false;
  // mcConfig: any;
  questionaire: Questionaire;
  character: any;

  constructor(public _ls: StorageService) {
    this.questionaire = new Questionaire(questions);
  }

  navigateToWorld() {
    // import router
  }

  doesCharacterExist(): void {
    // if this retrieve character from local Storage
    // else this.create Character
  }

  async createCharacter(): Promise<void> {
    this.character = await new Character(this.questionaire);
    this._ls.createCharacter(this.character);
    console.log(this.character, "Character made?");
  }

  createPresetCharacter(): void {
    let set = new Questionaire({
      start: false,
      questions: questions,
      answers: {
        0: "1",
        1: "ambition",
        2: "ambition",
        3: "ambition",
        4: "ambition",
        5: "1",
        6: "Nina", // Name
      },
      currentQuestionIndex: 7,
      currentQuestion: null,
      maxLength: 7,
      minLength: 0,
      completed: true,
    });
    this.character = new Character(set);
    console.log(this.character);
    this._ls.createCharacter(this.character);
    console.log(this.character, "Character made?");
  }
}
