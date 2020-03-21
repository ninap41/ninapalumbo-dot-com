import { Component, OnInit } from "@angular/core";
import { Observable, timer } from "rxjs";
import { BlinkService } from "./blink.service";
@Component({
  selector: "app-software",
  templateUrl: "./software.component.html",
  styleUrls: ["./software.component.scss"]
})
export class SoftwareComponent implements OnInit {
  selection = {
    value: "material"
  };
  today: number = Date.now();

  softwareBlink;
  softwareLongBlink;

  constructor(public _bs: BlinkService) {}

  ngOnInit(): void {
    this.softwareBlink = this._bs.returnUniqueBlink("(click me)", 500);
    this.softwareLongBlink = this._bs.returnTypingString(
      "Hi. Um, I'm a recovering crackhead. This is my retarded sister that I take care of. I'd like some welfare, please.",
      100
    );
  }

  toggleModalState() {
    this._bs.modalState = !this._bs.modalState;
  }
}
