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

  constructor(public _bs: BlinkService) {}

  ngOnInit(): void {
    this.softwareBlink = this._bs.returnUniqueBlink("(click me)", 500);
  }
}
