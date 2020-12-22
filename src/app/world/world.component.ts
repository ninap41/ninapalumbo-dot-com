import { Component, OnInit } from "@angular/core";
import { GameService } from "../services/game.service";
import { Observable } from "rxjs";
import { StorageService } from "../services/storage.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-world",
  templateUrl: "./world.component.html",
  styleUrls: ["./world.component.scss"],
})
export class WorldComponent implements OnInit {
  data: any;
  constructor(
    public _gs: GameService,
    public _ls: StorageService,
    private http: HttpClient
  ) {}

  async ngOnInit(): Promise<void> {
    this._ls.validateIfStorageExists();
    await this.getData();
    console.log(this.data);
  }

  async getData(): Promise<any> {
    await this.http.get("http://localhost:3000/entries").subscribe(
      (data: Response) => {
        console.log(data);
        this.data = data;
      },
      (err) => console.log(err)
    );
  }
}
