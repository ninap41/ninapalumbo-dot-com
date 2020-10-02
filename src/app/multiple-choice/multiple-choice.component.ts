import { Component, OnInit } from "@angular/core";
import { GameService } from "../services/game.service";
import { ConfigService } from "../services/config.service";
import { Questionaire } from "../classes/Questionaire.class";

@Component({
  selector: "app-multiple-choice",
  templateUrl: "./multiple-choice.component.html",
  styleUrls: ["./multiple-choice.component.scss"],
})
export class MultipleChoiceComponent implements OnInit {
  constructor(public _gs: GameService) {}

  ngOnInit(): void {}
}
