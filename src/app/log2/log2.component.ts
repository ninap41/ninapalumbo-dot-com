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
import { Log2Service } from "../services/log2.service";
import { editorConfig } from "./editorConfig";
import { HtmlParser } from "@angular/compiler";
import { toHtml } from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: "app-log2",
  templateUrl: "./log2.component.html",
  styleUrls: ["./log2.component.scss"],
})
export class Log2Component implements OnInit {
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

  constructor(public _ls: Log2Service) {}
  htmlContent = {
    htmlContent1: toHtml(""),
  };

  async ngOnInit(): Promise<void> {
    this._ls.getEntries();
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
