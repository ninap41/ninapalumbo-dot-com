import { Component, OnInit } from "@angular/core";
import { GameService } from "../services/game.service";
import { Observable } from "rxjs";
import { StorageService } from "../services/storage.service";
@Component({
  selector: "app-world",
  templateUrl: "./world.component.html",
  styleUrls: ["./world.component.scss"],
})
export class WorldComponent implements OnInit {
  data: any;
  constructor(public _gs: GameService, public _ls: StorageService) {}

  ngOnInit(): void {
    this._ls.validateIfStorageExists();
  }
}
