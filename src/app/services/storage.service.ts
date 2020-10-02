import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Character } from "../classes/Character.class";
import { sampleUser, user, startingUser } from "./storage.json";

@Injectable({
  providedIn: "root",
})
export class StorageService {
  // list of possible storage classes
  user: any; //will be class
  log = { entries: [] };

  // key set NgOnit from component;
  storageKey: string = "user";

  //for downloading the save file
  file;

  //starting user from JSON.
  startingUser = startingUser;
  constructor() {
    this.validateIfStorageExists();
  }

  updateStorageKey(string) {
    this.storageKey = string;
  }

  validateIfStorageExists() {
    if (localStorage.getItem(this.storageKey) === null) {
      // this.user = user;
      this[this.storageKey] = {};
    } else {
      //  this[this.storageKey] = JSON.parse(localStorage.getItem(this.storageKey));
      this[this.storageKey] = JSON.parse(localStorage.getItem(this.storageKey));
    }
    this.setStorage();
  }

  setSampleCharacters() {
    this[this.storageKey] = sampleUser;
    this.setStorage();
  }

  addNewLog(event) {
    const val = event.htmlContent1;
    let entry = {
      id: Math.floor(Math.random() * 999999999),
      content: val,
      date: new Date(),
    };
    if (this.log.hasOwnProperty("entries")) {
      this.log.entries.push(entry);
    } else {
      this.log = { entries: [] };
      this.log.entries.push(entry);
    }
    this.setStorage();
  }

  createCharacter(character: Character) {
    if (this.user.hasOwnProperty("characters")) {
      this.user.characters > 3
        ? alert("Too Many Characters, go to save settings and Delete Please")
        : this.user.characters.push(character);
      localStorage.setItem(this.storageKey, JSON.stringify(this.user));
    } else {
      this.user = { characters: [] };
      this.user.characters.push(character);
      localStorage.setItem(this.storageKey, JSON.stringify(this.user));
    }
  }

  returnUser() {
    // rename to return Key
    // will be referenced in game service
    this[this.storageKey] = JSON.parse(localStorage.getItem(this.storageKey));
    return this.user;
  }

  deleteCharacter(id: string) {
    console.log(id);
    var newChars = this.user.characters.filter(
      (character) => character.id !== id
    );
    this.user.characters = newChars;
    this.setStorage();
  }

  deleteIndex(id: string, localStorageKey: string, arrayKey: string) {
    var newArray = this[localStorageKey][arrayKey].filter(
      (item) => item.id !== id
    );
    this[localStorageKey][arrayKey] = newArray;
    this.setStorage();
  }

  setStorage() {
    localStorage.setItem(
      this.storageKey,
      JSON.stringify(this[this.storageKey])
    );
  }

  generateDownloadJsonUri() {
    // check for if file exists, add snack bars man
    var a = document.createElement("a");
    document.body.appendChild(a);
    // a.style = "display: none";
    var blob = new Blob([JSON.stringify(this[this.storageKey], null, 2)], {
        type: "octet/stream",
      }),
      url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = "GameSave.json";
    a.click();
    window.URL.revokeObjectURL(url);
  }

  onFileSelect(event) {
    this.file = event.target.files[0];
  }

  orderLogs() {}

  async submitSaveFile() {
    const fileReader = new FileReader();
    fileReader.readAsText(this.file, "UTF-8");
    fileReader.onload = () => {
      let parsed;
      localStorage.setItem(
        this.storageKey,
        JSON.parse(JSON.stringify(fileReader.result))
      );
      this.returnUser();
    };
    fileReader.onerror = (error) => {
      console.log(error);
    };
  }

  wipeStorage() {
    localStorage.clear();
    this.validateIfStorageExists();
    // console.log(user);
    this.setStorage(); // set to empty user
    this.returnUser();
  }

  wipeStorageByKey(key: string) {
    localStorage.removeItem(key);
    console.log(localStorage);
    this[key] = {};
  }
}
