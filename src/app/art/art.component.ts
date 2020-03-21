import { Component, OnInit } from "@angular/core";
import { ArtService, MainDisplay } from "./art.service";

@Component({
  selector: "app-art",
  templateUrl: "./art.component.html",
  styleUrls: ["./art.component.scss"]
})

//enum for
export class ArtComponent implements OnInit {
  mainDisplay: MainDisplay;
  constructor(private _as: ArtService) {
    this.mainDisplay = _as.art;
  }

  ngOnInit(): void {}
}
