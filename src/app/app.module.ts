import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtComponent,
    MusicComponent,
    SoftwareComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularDraggableModule
  ],
  providers: [BlinkService],
  bootstrap: [AppComponent]
})
export class AppModule {}
