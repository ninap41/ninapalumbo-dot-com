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
import { Log2Service } from "./services/log2.service";
import { ConfigService } from "./services/config.service";
import { WorldComponent } from "./world/world.component";
import { StorageService } from "./services/storage.service";
import { HomeComponent } from "./home/home.component";
import { BagComponent } from "./bag/bag.component";
import { SaveComponent } from "./save/save.component";
import { Log2Component } from "./log2/log2.component";

import { FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";

import {
  HttpClient,
  HttpHandler,
  HttpClientModule,
} from "@angular/common/http";
import { LogComponent } from "./log/log.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    MultipleChoiceComponent,
    WorldComponent,
    HomeComponent,
    BagComponent,
    SaveComponent,
    LogComponent,
    Log2Component,
  ],

  imports: [
    BrowserModule,
    FontAwesomeModule,
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
    Log2Service,
    FormBuilder,
    HttpClient,
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
