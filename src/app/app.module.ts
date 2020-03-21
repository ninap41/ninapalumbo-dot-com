import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AngularDraggableModule } from "angular2-draggable";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ArtComponent } from "./art/art.component";
import { MusicComponent } from "./music/music.component";
import { SoftwareComponent } from "./software/software.component";
import { AboutComponent } from "./about/about.component";
import { BlinkService } from "./software/blink.service";
import { TerminalComponent } from "./software/terminal/terminal.component";
import { ArtService } from "./art/art.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtComponent,
    MusicComponent,
    SoftwareComponent,
    AboutComponent,
    TerminalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularDraggableModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [NO_ERRORS_SCHEMA],

  providers: [BlinkService, ArtService],
  bootstrap: [AppComponent]
})
export class AppModule {}
