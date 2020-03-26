import { Observable, timer, Subscription } from "rxjs";

const scripts = {
  software: {
    speed: 300,
    script: {
      content: "Here you go. First Script",
      choices: ["none"]
    }
  }
};

export class Blink {
  blinkString: string;
  blinkLongString: string;
  obsTimer: Observable<number>;
  constructor(blinkString: string, timer: Observable<number>) {
    this.blinkString = blinkString;
    this.blinkLongString = "";
    this.obsTimer = timer;
  }
  // for the cursor
  public returnUniqueBlink(val: string, time: number) {
    var blink = new Blink(val, timer(1000, time));
    blink.obsTimer.subscribe(currTime => {
      if (currTime % 2 === 0) {
        blink.blinkString = "";
      } else {
        blink.blinkString = val;
      }
    });
    return blink;
  }

  // types out the string for program script
  public returnTypingString(val: string, time: number) {
    var blink = new Blink(val, timer(1000, time));
    var sub = new Subscription();
    blink.blinkLongString = "";
    sub = blink.obsTimer.subscribe(currTime => {
      if (blink.blinkLongString === val) {
        console.log(val);
        blink.blinkLongString = val;
        return sub.unsubscribe();
      }
      if (currTime !== val.length - 1) blink.blinkLongString += val[currTime];
      else blink.blinkLongString = val;
    });
    return blink;
  }
}

class Terminal {
  id: any;
  modalState: boolean;
  type: string;
  program: Program;
  preface: string;
  blink: Blink;
  text: string;

  constructor(type: string, timer: Observable<number>) {
    this.id = Math.floor(Math.random() * 99999999);
    this.modalState = false;
    this.type = type || "software";
  }
}

class Program extends Terminal {
  mastScript: Object;
  speed: number;
  currentScript: Object;

  constructor(type: string, timer: Observable<number>) {
    super(type, timer);
  }
}
