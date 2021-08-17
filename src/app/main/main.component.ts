import { Component, OnInit } from "@angular/core";
import { LangService } from "../core/lang.service";
import { Lang } from "../interfaces/lang.interface";
@Component({
	selector: "app-main",
	templateUrl: "./main.component.html",
	styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
	public navCopy: Lang;
	// eslint-disable-next-line no-unused-vars
	constructor(private langService: LangService,) {
		this.langService.generalCopy$.subscribe(copy =>this.navCopy = copy);
	}

	ngOnInit(): void {
	}

}
