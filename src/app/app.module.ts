import { BrowserModule } from "@angular/platform-browser";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AngularDraggableModule } from "angular2-draggable";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BlinkService } from "./services/blink.service";
import { AngularEditorModule } from "@kolkov/angular-editor";

import { MultipleChoiceComponent } from "./multiple-choice/multiple-choice.component";
import { GameService } from "./services/game.service";
import { ConfigService } from "./services/config.service";
import { WorldComponent } from "./world/world.component";
import { StorageService } from "./services/storage.service";
import { HomeComponent } from "./home/home.component";
import { BagComponent } from "./bag/bag.component";
import { SaveComponent } from "./save/save.component";
import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  HttpClient,
  HttpHandler,
  HttpClientModule,
} from "@angular/common/http";
import { LogComponent } from "./log/log.component";

@NgModule({
  declarations: [
    AppComponent,
    MultipleChoiceComponent,
    WorldComponent,
    HomeComponent,
    BagComponent,
    // HttpHandler,

    SaveComponent,
    LogComponent,
  ],

  imports: [
    BrowserModule,
    AngularEditorModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularDraggableModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    BlinkService,
    GameService,
    ConfigService,
    StorageService,
    FormBuilder,
    HttpClient,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
