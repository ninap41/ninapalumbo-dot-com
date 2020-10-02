import { Component, OnInit } from "@angular/core";
import { GameService } from "../services/game.service";
import { StorageService } from "../services/storage.service";
@Component({
  selector: "app-save",
  templateUrl: "./save.component.html",
  styleUrls: ["./save.component.scss"],
})
export class SaveComponent implements OnInit {
  constructor(public _ls: StorageService, public _gs: GameService) {}

  ngOnInit(): void {
    this._ls.updateStorageKey("user");
    this._ls.validateIfStorageExists();
  }
}
