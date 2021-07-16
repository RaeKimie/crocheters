import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ConverterComponent } from "./converter/converter.component";
import { MainComponent } from "./main/main.component";
import { ProjectsComponent } from "./projects/projects.component";

const routes: Routes = [
	{ path: "", component: MainComponent },
	{ path: "converter", component: ConverterComponent },
	{ path: "projects", component: ProjectsComponent },
	{ path: "about", component: AboutComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
