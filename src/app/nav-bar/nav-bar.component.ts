import { Component } from "@angular/core";
import { LangService } from "../core/lang.service";

@Component({
	selector: "app-nav-bar",
	templateUrl: "./nav-bar.component.html",
	styleUrls: ["./nav-bar.component.scss"]
})
export class NavBarComponent {
	public toggleMenu = false;
	constructor(
		// eslint-disable-next-line no-unused-vars
		private langService: LangService
	) { }

	public onClick(): void {
		this.toggleMenu = !this.toggleMenu;
	}

	public selectLang(lang: "kr" | "en"): void {
		this.langService.updateLang(lang);
	}

}
