import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";

import { Observable, of, BehaviorSubject, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LogService {
  log: any = new BehaviorSubject<any[]>([]);
  storageKey: string = "log";
  baseUrl: string = "http://localhost:3000";
  loading: boolean = false;
  constructor(
    private http: HttpClient,
    private router_: Router,
    private route: ActivatedRoute
  ) {}

  public async getEntries(): Promise<any> {
    await this.http.get(this.baseUrl + "/api/entries").subscribe(
      (data: Response) => {
        let d = data;
        //@ts-ignore
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

  public async sort(order: string, localStorageKey: string, arrayKey: string) {
    this.loading = true;
    await this.http
      .get(this.baseUrl + `/api/entries/sort/${order}`)
      .subscribe((data) => {
        let d = data;
        // @ts-ignore
        this.log = of(d.entries);
      })
      .unsubscribe();
    this.loading = false;
  }
  // /api/entries/add
  public async addEntry(event): Promise<void> {
    const val = this.convertHTML(event.htmlContent1);
    this.loading = true;

    let entry = {
      content: val,
      date: new Date(),
      tags: [],
    };
    await this.http
      .post(this.baseUrl + "/api/entries/add/", entry)
      .subscribe(
        (response) => console.log("response from the api", response),
        (err) => console.log(err)
      )
      .unsubscribe();

    await this.getEntries();
    this.loading = false;
  }

  public async deleteById(id: string, index: number): Promise<void> {
    //Node api route
    this.loading = true;
    await this.http
      .delete(this.baseUrl + `/api/entries/delete/${id}`)
      .subscribe(
        (response) => {
          console.log("response from the api", response);
        },
        (err) => console.log(err)
      )
      .unsubscribe();
    await setTimeout(async () => {
      await confirm("Confirm Delete");
      this.getEntries();
    }, 1000);

    this.loading = false;
  }

  // public async findOne(id: string, localStorageKey: string, content: string) {
  //   // this.http.post(`/api/entries/update/${id}`, )
  // }

  public async editById(id: string, localStorageKey: string, content: string) {
    // this.http.post(`/api/entries/update/${id}`, )
  }

  submitEditById(...args) {}

  deleteAllEntries() {
    this.http
      .delete(this.baseUrl + `/api/entries/deleteAll`)
      .subscribe(
        (res) => console.log(res, "RES"),
        (err) => console.log(err, "ERR")
      )
      .unsubscribe();
  }
}
