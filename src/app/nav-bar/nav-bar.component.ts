import { Component } from "@angular/core";

@Component({
	selector: "app-nav-bar",
	templateUrl: "./nav-bar.component.html",
	styleUrls: ["./nav-bar.component.scss"]
})
export class NavBarComponent {
	public toggleMenu = false;
	// constructor() { }

	public onClick(): void {
		this.toggleMenu = !this.toggleMenu;
	}

}
