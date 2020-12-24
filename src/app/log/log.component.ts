import { Component, OnInit } from "@angular/core";
import { Observable, of } from "rxjs";
import {
  faSortUp,
  faSortDown,
  faTrashAlt,
  faEdit,
  faCheck,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import { AngularEditorConfig } from "@kolkov/angular-editor";
import { LogService } from "../services/log.service";
import { editorConfig } from "./editorConfig";
import { HtmlParser } from "@angular/compiler";
import { toHtml } from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: "app-log",
  templateUrl: "./log.component.html",
  styleUrls: ["./log.component.scss"],
})
export class LogComponent implements OnInit {
  faSortUp = faSortUp;
  faSortDown = faSortDown;
  faTrashAlt = faTrashAlt;
  faCheck = faCheck;
  faWindowClose = faWindowClose;
  faEdit = faEdit;
  editState = {
    state: false,
    index: null,
  };
  editorConfig = editorConfig;
  entries: any[];
  log: Observable<any[]>;

  constructor(public _ls: LogService) {}
  htmlContent = {
    htmlContent1: toHtml(""),
  };

  async ngOnInit(): Promise<void> {
    await this._ls.getEntries();
  }
  toggleEdit(event, index) {
    this.editState.index = this.editState.state ? null : index;
    this.editState.state = !this.editState.state;
    console.log(event.target);
  }
  editStateReset() {
    this.editState = { state: false, index: null };
  }
}
