import { Component, ViewEncapsulation } from "@angular/core";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  faGamepad = faGamepad;
  title = "website";
}
