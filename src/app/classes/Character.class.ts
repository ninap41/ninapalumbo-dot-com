import { Questionaire } from "./Questionaire.class";

export class BravePersonality {
  constructor() {
  }
  name: string;
  karmaAffect: number;
  baseBag: Array<any>;
  modifiers: Array<Function>
  health: number;
  traits: Array<Effect>
}


export class Effect {
  constructor(name: string, dscription: string) {

  }
  name: string;
  description: string;
  statAffect: Function;

  isInterval() {

  }

}

export class Character {
  id: number; // ✅
  name: string; // ✅
  questionaireAnswers: Array<any>; // ✅
  questionaire: Questionaire; // ✅
  // questionaire: Questionaire;
  personality: any;
  karma: number;
  bag: Array<any>;
  worldPoint: {
    roomName: String; // not sure if this will work
    chapter: string;
    room: object;
  };
  chapter: object;
  health: number;
  EquippedWeapon: Array<any>;
  Ailments: Array<any>;

  constructor(questionaire: Questionaire) {
    this.assignTraits(questionaire);

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
    console.log(mapped, "Mapped");
    console.log(questionaire.questions, "questionaire.questions.");
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
