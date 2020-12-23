import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BagComponent } from "./bag/bag.component";
import { HomeComponent } from "./home/home.component";
import { MultipleChoiceComponent } from "./multiple-choice/multiple-choice.component";
import { SaveComponent } from "./save/save.component";
import { WorldComponent } from "./world/world.component";
import { LogComponent } from "./log/log.component";
import { Log2Component } from "./log2/log2.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "multipleChoice", component: MultipleChoiceComponent },
  { path: "save", component: SaveComponent },
  { path: "world", component: WorldComponent },
  { path: "log", component: LogComponent },
  { path: "log2", component: Log2Component },

  { path: "bag", component: BagComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
