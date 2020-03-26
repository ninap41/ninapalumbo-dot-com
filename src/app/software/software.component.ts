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

  constructor(public _bs: BlinkService) {}

  ngOnInit(): void {}

  toggleModalState() {
    this._bs.modalState = !this._bs.modalState;
  }
}
