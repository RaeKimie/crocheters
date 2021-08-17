import { Component } from "@angular/core";
import { LangService } from "../core/lang.service";
import { GeneralCopy } from "../interfaces/lang.interface";


@Component({
	selector: "app-nav-bar",
	templateUrl: "./nav-bar.component.html",
	styleUrls: ["./nav-bar.component.scss"]
})
export class NavBarComponent {
	public toggleMenu = false;
	public navCopy: GeneralCopy;

	constructor(
		// eslint-disable-next-line no-unused-vars
		private langService: LangService,

	) {
		this.langService.generalCopy$.subscribe(copy => this.navCopy = copy);
	}

	public onClick(): void {
		this.toggleMenu = !this.toggleMenu;
	}

	public selectLang(lang: "kr" | "en"): void {
		this.langService.updateLang(lang);
	}

}
