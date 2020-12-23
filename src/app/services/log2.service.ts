import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class Log2Service {
  log: Observable<any[]>;
  storageKey: string = "log";
  baseUrl: string = "http://localhost:3000";
  constructor(private http: HttpClient, private router_: Router) {}

  public async getEntries(): Promise<any> {
    await this.http.get(this.baseUrl + "/api/entries").subscribe(
      (data: Response) => {
        let d = data;
        this.log = of(d.entries);
      },
      (err) => console.log(err)
    );
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
    console.log(order);
    console.log(this.log, "ls");
    this.http
      .get(this.baseUrl + `/api/entries/sort/${order}`)
      .subscribe((data) => {
        let d = data;
        this.log = of(d.entries);
      });
  }
  // /api/entries/add
  public async addEntry(event): Promise<void> {
    console.log(event);
    const val = this.convertHTML(event.htmlContent1);
    console.log(val);
    let entry = {
      id: Math.floor(Math.random() * 999999999),
      content: val,
      date: new Date(),
      tags: [],
    };
    await this.http.post(this.baseUrl + "/api/entries/add/", entry).subscribe(
      (response) => console.log("response from the api", response),
      (err) => console.log(err)
    );
    this.getEntries();
  }

  public async deleteById(
    id: string,
    localStorageKey: string,
    arrayKey: string
  ): Promise<void> {
    //Node api route
    await this.http
      .delete(this.baseUrl + `/api/entries/delete/${id}`)

      .subscribe(
        (response) => console.log("response from the api", response),
        (err) => console.log(err)
      );
    await this.getEntries();
    this.router_.navigate(["/log2"]);
  }

  public async findOne(id: string, localStorageKey: string, content: string) {
    // this.http.post(`/api/entries/update/${id}`, )
  }

  public async editById(id: string, localStorageKey: string, content: string) {
    // this.http.post(`/api/entries/update/${id}`, )
  }

  deleteAllEntries() {
    // localStorage.clear();
    // this.validateIfStorageExists();
    // // console.log(user);
    // this.setStorage(); // set to empty user
    // this.returnUser();
  }
}
