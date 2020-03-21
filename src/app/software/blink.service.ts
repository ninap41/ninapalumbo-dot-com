import { Component, OnInit } from "@angular/core";
import { Observable, timer, Subscription } from "rxjs";

class Blink {
  blinkString: string;
  blinkLongString: string;

  obsTimer: Observable<number>;
  constructor(blinkString: string, timer: Observable<number>) {
    this.blinkString = blinkString;
    this.blinkLongString = "";
    this.obsTimer = timer;
  }
}

export class BlinkService {
  modalState: Boolean = false;

  constructor() {}

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
