import { Component, OnInit } from "@angular/core";
import { Observable, timer, Subscription } from "rxjs";

class Blink {
  blinkString: string;
  blinkLongString: string;
  scripts: Array<String>;
  obsTimer: Observable<number>;
  timeDone: Boolean;
  constructor(blinkString: string, timer: Observable<number>) {
    this.blinkString = blinkString;
    this.blinkLongString = "";
    this.scripts = [];
    this.obsTimer = timer;
    this.timeDone = undefined;
  }
}

export class BlinkService {
  modalState: Boolean = false;
  cursor;
  constructor() {
    this.cursor = this.cursor = this.returnUniqueBlink("|", 1000);
  }

  public returnUniqueBlink(val: string, time: number) {
    var blink = new Blink(val, timer(1000, time));
    blink.obsTimer.subscribe((currTime) => {
      if (currTime % 2 === 0) {
        blink.blinkString = "";
      } else {
        blink.blinkString = val;
      }
    });
    return blink;
  }

  public returnTypingString(val: string, time: number) {
    var blink = new Blink(val, timer(1000, time));
    var sub = new Subscription();
    blink.blinkLongString = "";
    sub = blink.obsTimer.subscribe((currTime) => {
      if (blink.blinkLongString === val) {
        blink.blinkLongString = val;
        blink.timeDone = true;
        return sub.unsubscribe();
      }
      if (currTime !== val.length - 1) blink.blinkLongString += val[currTime];
      else blink.blinkLongString = val;
    });
    return blink;
  }
}

// this.softwareBlink = this._bs.returnUniqueBlink("|", 500);
// this.softwareLongBlink = this._bs.returnTypingString(
//   "This will create a program iteration for the user to traverse",
//   100
// );
