import { Component, OnInit } from "@angular/core";
import { LangService } from "../core/lang.service";
import { GeneralCopy } from "../interfaces/lang.interface";
@Component({
	selector: "app-main",
	templateUrl: "./main.component.html",
	styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
	public copy: GeneralCopy;
	// eslint-disable-next-line no-unused-vars
	constructor(private langService: LangService,) {
		this.langService.generalCopy$.subscribe(copy =>this.copy = copy);
	}

	ngOnInit(): void {
	}

}
