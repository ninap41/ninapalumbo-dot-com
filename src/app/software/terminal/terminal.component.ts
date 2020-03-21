import { Component, OnInit, Input } from "@angular/core";
import { BlinkService } from "../blink.service";

@Component({
  selector: "app-terminal",
  templateUrl: "./terminal.component.html",
  styleUrls: ["./terminal.component.scss"]
})
export class TerminalComponent implements OnInit {
  private _propertyName: any;
  today: number = Date.now();

  @Input() public get propertyName() {
    return this._propertyName;
  }

  public set propertyName(val: any) {
    this._propertyName = val;
  }

  constructor(public _bs: BlinkService) {}

  ngOnInit(): void {}
}
