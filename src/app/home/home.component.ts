import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
