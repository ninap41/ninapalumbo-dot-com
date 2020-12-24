import { Component, OnInit } from "@angular/core";
import { GameService } from "../services/game.service";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import * as THREE from "three";

@Component({
  selector: "app-world",
  templateUrl: "./world.component.html",
  styleUrls: ["./world.component.scss"],
})
export class WorldComponent implements OnInit {
  constructor(public _gs: GameService, private http: HttpClient) {}

  async ngOnInit(): Promise<void> {}

  async animate() {}
}
