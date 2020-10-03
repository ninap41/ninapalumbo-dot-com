import { Component, OnInit } from "@angular/core";
import { StorageService } from "../services/storage.service";
import {
  faSortUp,
  faSortDown,
  faTrashAlt,
  faEdit,
  faCheck,
  faWindowClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontawesomeObject } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

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

  constructor(public _ls: StorageService) {}
  htmlContent = {
    content: "",
    tags: [],
  };

  editContent = "";

  ngOnInit(): void {
    this._ls.updateStorageKey("log");
    this._ls.validateIfStorageExists();
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
