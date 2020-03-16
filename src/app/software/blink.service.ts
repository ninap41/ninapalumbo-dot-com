import { Component, OnInit } from "@angular/core";
import { Observable, timer } from "rxjs";

class Blink {
  blinkString: string;
  obsTimer: Observable<number>;
  constructor(blinkString: string, timer: Observable<number>) {
    this.blinkString = blinkString;
    this.obsTimer = timer;
  }
}

export class BlinkService {
  blink: Blink;

  constructor() {
    this.blink = new Blink("|", timer(1000, 500));
    this.blink.obsTimer.subscribe(currTime => {
      if (currTime % 2 === 0) {
        this.blink.blinkString = "";
      } else {
        this.blink.blinkString = "|";
      }
    });
  }

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
}
