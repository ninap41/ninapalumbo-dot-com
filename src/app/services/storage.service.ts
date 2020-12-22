import { rendererTypeName } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Character } from "../classes/Character.class";
import { sampleUser, user, startingUser } from "./storage.json";
import { HttpClient, HttpHeaders } from "@angular/common/http";

// local storage

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

  convertHTML(str) {
    // &colon;&rpar;
    var toHTML = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&apos;": "'",
    };
    str = str.replace(/&amp;/g, toHTML["&amp;"]);
    str = str.replace(/&lt;/g, toHTML["&lt;"]);
    str = str.replace(/&gt;/g, toHTML["&gt;"]);
    str = str.replace(/&quot;/g, toHTML["&quot;"]);
    str = str.replace(/&apos;/g, toHTML["&apos;"]);

    return str;
  }

  sort(order: string, localStorageKey: string, arrayKey: string) {
    console.log(this[localStorageKey][arrayKey], "ls");
    this[localStorageKey][arrayKey] = this[localStorageKey][arrayKey].sort(
      function (a, b) {
        return new Date(a.date).getTime() > new Date(b.date).getTime()
          ? order === "asc"
            ? -1
            : 1
          : order === "asc"
          ? 1
          : -1;
      }
    );
    console.log(this.log.entries);
    this.setStorage();
  }

  addNewLog(event) {
    console.log(event);
    const val = this.convertHTML(event.htmlContent1);

    console.log(val);
    let entry = {
      id: Math.floor(Math.random() * 999999999),
      content: val,
      date: new Date(),
      tags: [],
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

  deleteById(id: string, localStorageKey: string, arrayKey: string) {
    var newArray = this[localStorageKey][arrayKey].filter(
      (item) => item.id !== id
    );
    this[localStorageKey][arrayKey] = newArray;
    this.setStorage();
  }
  submitEditById(
    id: string,
    localStorageKey: string,
    arrayKey: string,
    content: string
  ) {
    let entryToEdit = this[localStorageKey][arrayKey].find(
      (entry, idx) => entry.id === id
    );
    console.log("EntryToEdit");
    console.log(entryToEdit);

    const val = content;
    console.log(content);
    console.log("Value");

    entryToEdit.content = content;
    this[localStorageKey][arrayKey].map((entry) => {
      if (entry.id === entryToEdit.id) {
        entry.content = entryToEdit.content;
      }
    });
    this.setStorage();
  }

  setStorage() {
    localStorage.setItem(
      this.storageKey,
      JSON.stringify(this[this.storageKey])
    );
  }

  generateDownloadJsonUri() {
    var a = document.createElement("a");
    document.body.appendChild(a);
    // a.style = "display: none";
    var blob = new Blob([JSON.stringify(this["log"], null, 2)], {
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
