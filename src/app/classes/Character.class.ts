import { AnimationFactory } from "@angular/animations";
import { NgModule } from "@angular/core";
import { NgModuleFactory } from "@angular/core/src/r3_symbols";
import { Questionaire } from "./Questionaire.class";

export class BravePersonality {
  constructor() {}
  name: string;
  karmaAffect: number;
  baseBag: Array<any>;
  modifiers: Array<Function>;
  health: number;
  traits: Array<Effect>;
}

export class Effect {
  constructor(name: string, dscription: string) {}
  name: string;
  description: string;
  statAffect: Function;

  isInterval() {}
}

// class Personality {
//  will contain before turn and after turn perks
// loner or brave will not be a team player
// community and logic will be.
// a logic perk will get you out of tricky situations and count towards being able to evade enemies
// }

export class Character {
  perks: any;
  id: number; // ✅
  name: string; // ✅
  questionaireAnswers: Array<any>; // ✅
  questionaire: Questionaire; // ✅
  // questionaire: Questionaire;
  personality: any;
  karma: number;
  bag: Array<any>;
  worldPoint: Array<any>;
  chapter: object;
  health: number;
  equippedWeapon: Array<any>;
  ailments: Array<any>;

  constructor(questionaire: Questionaire) {
    this.assignTraits(questionaire);
    this.karma = 0;
    this.chapter = { ch: 1 };
    this.health = 100;
    this.equippedWeapon = null;

    this.worldPoint = [{ id: 1, roomName: "Start", room: {} }];
    this.bag = [{ name: "Door Key", description: "Just a key", type: "key" }];
    return this;
  }

  assignTraits(questionaire) {
    this.questionaireAnswers = questionaire.answers;

    let mapped: object = {
      // looks like ... {text: "Would you call yourself loyal?", answer: "1", type: ''}
      ...questionaire.questions.map((question, index) => {
        return {
          text: question.text,
          answer: questionaire.answers[index],
          type: question.type,
        };
      }),
    };

    this.name = mapped[questionaire.questions.length - 1].answer; // length of answer array to find object id
    this.id = Math.floor(Math.random() * 1000000);

    // switch (expression) {
    //   case x:
    //     // code block
    //     break;
    //   case y:
    //     // code block
    //     break;
    //   default:
    //   // code block
    // }
  }

  shuffleBag() {}
  assignAilment() {}
  save() {}
  restart() {}
  delete() {}
}
