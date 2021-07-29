import { Component, OnInit } from "@angular/core";
import { LangService } from "../core/lang.service";

@Component({
	selector: "app-main",
	templateUrl: "./main.component.html",
	styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
	public lang: string;
	// eslint-disable-next-line no-unused-vars
	constructor(private langService: LangService,) { this.langService.language$.subscribe(selectedLang => this.lang = selectedLang); }

	ngOnInit(): void {
	}

}
