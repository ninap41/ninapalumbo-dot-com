import { Component, OnInit, Input } from "@angular/core";
import { BlinkService } from "../blink.service";
import { Observable, timer, Subscription } from "rxjs";
import { Blink } from "../terminal.class";

@Component({
  selector: "app-terminal",
  templateUrl: "./terminal.component.html",
  styleUrls: ["./terminal.component.scss"]
})
export class TerminalComponent implements OnInit {
  private _propertyName: any;
  today: number = Date.now();

  @Input() toggleModalState: any;

  softwareBlink;
  softwareLongBlink;

  constructor(public _bs: BlinkService) {}

  ngOnInit(): void {
    this.softwareBlink = this._bs.returnUniqueBlink("|", 500);
    this.softwareLongBlink = this._bs.returnTypingString(
      "This will create a program iteration for the user to traverse",
      100
    );
  }
}
