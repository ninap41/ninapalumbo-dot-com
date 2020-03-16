import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ArtComponent } from "./art/art.component";
import { MusicComponent } from "./music/music.component";
import { SoftwareComponent } from "./software/software.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "art", component: ArtComponent },
  { path: "music", component: MusicComponent },
  { path: "software", component: SoftwareComponent },
  { path: "about", component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
