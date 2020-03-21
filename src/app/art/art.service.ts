import { Injectable } from "@angular/core";
import { art } from "./art_ref.json";
@Injectable({
  providedIn: "root"
})
export class View {}
export class MainDisplay {
  allWorks: Array<any> = [];
  showingWorks: Array<any> = [];
  show: Boolean;
  currentFilter: string;
  filterTags: Array<string>;
  view: string;

  constructor(list: Array<any>) {
    this.allWorks = list;
    this.showingWorks = list;
    this.show = false;
    this.currentFilter = "all";
    this.filterTags = undefined;
    this.view = "carousel";
  }

  updateWorks(filter: string) {
    this.showingWorks.filter(x => x.tags === filter);
    return this;
  }
}

export class ArtService {
  art: MainDisplay = new MainDisplay(art.artworks);

  constructor() {}
}
