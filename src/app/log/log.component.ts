import { Component, OnInit } from "@angular/core";
import { StorageService } from "../services/storage.service";
@Component({
  selector: "app-log",
  templateUrl: "./log.component.html",
  styleUrls: ["./log.component.scss"],
})
export class LogComponent implements OnInit {
  constructor(public _ls: StorageService) {}
  htmlContent = {
    htmlContent1: "",
  };
  ngOnInit(): void {
    this._ls.updateStorageKey("log");
    this._ls.validateIfStorageExists();
  }
}
