import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BagComponent } from "./bag/bag.component";
import { HomeComponent } from "./home/home.component";
import { MultipleChoiceComponent } from "./multiple-choice/multiple-choice.component";
import { SaveComponent } from "./save/save.component";
import { WorldComponent } from "./world/world.component";
import { LogComponent } from "./log/log.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "multipleChoice", component: MultipleChoiceComponent },
  { path: "save", component: SaveComponent },
  { path: "world", component: WorldComponent },
  { path: "log", component: LogComponent },

  { path: "bag", component: BagComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
