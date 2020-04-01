import { Component, OnInit, ɵPlayState } from "@angular/core";
import { ArtService, MainDisplay } from "./art.service";
import { Observable, timer, Subscription, of } from "rxjs";
import { Template } from "@angular/compiler/src/render3/r3_ast";
import { BlinkService } from "../software/blink.service";
import { HttpClient } from "@angular/common/http";
import { Blink } from "../software/terminal.class";

@Component({
  selector: "app-art",
  templateUrl: "./art.component.html",
  styleUrls: ["./art.component.scss"]
})

//enum for
export class ArtComponent implements OnInit {
  mainDisplay: MainDisplay;
  artDescriptionConfig;
  blinkDescript;
  array = ["high", "how", "are", "you"];
  number;
  constructor(private _as: ArtService, public _bs: BlinkService) {
    this.mainDisplay = _as.art;
    this.artDescriptionConfig = {
      cursor: str => {
        this._bs.returnUniqueBlink(str, 500);
      },
      iterator: str => {
        this._bs.returnTypingString(str, 100);
      },
      pressEnter: (data: string, evt: KeyboardEvent) => {
        console.log(data, "data", evt, "evt");
      },
      playScript: async (displayScript: Array<string>) => {}
    };
    // this.mainDisplay.showingWorks = this.mainDisplay.showingWorks.map(art => {
    //   return {
    //     ...art,
    //     description: this.artDescriptionConfig.iterator(
    //       "<p>Made With Procreate. I explored negative space with this one, beginning the piece on a dark background. The model looked really run down and I was dealing with my fibromylgia flares at their worst. </p>"
    //     )
    //   };
    // });
  }

  ngOnInit(): void {
    this.blinkDescript = this._bs.returnTypingString(
      `Made With Procreate. I explored negative space with this one, beginning the piece on a dark background. The model looked really run down and I was dealing with my fibromylgia flares at their worst.
    Dealing with physical pain and emotional pain is very intertwined for me. The portrait is of a woman sweating, uncomfortable, unable to sleep.`,
      10
    );
  }
}
