import { Component } from "@angular/core";
import { LangService } from "../core/lang.service";
import { Stitch } from "../interfaces/stitch.interface";
import { ConverterService } from "./converter.service";

@Component({
	selector: "app-converter",
	templateUrl: "./converter.component.html",
	styleUrls: ["./converter.component.scss"]
})

export class ConverterComponent {
	public langFrom: string = null;
	public langTo: string = null;
	public stitchNames: object[];
	public targetStitchNames: object[]

	public langOptions: object[];
	public stitchToDisplay: Stitch;
	public showVideos = false;
	public videoList = [];
	public videoLang: string;
	public lang: string;
	// eslint-disable-next-line no-unused-vars
	constructor(private converterService: ConverterService, private langService: LangService,) {

		this.langService.language$.subscribe(selectedLang => {
			this.reset();
			this.lang = selectedLang;
			if (selectedLang === "kr") {
				this.langOptions = this.converterService.langOptionsKr;
			} else {
				this.langOptions = this.converterService.langOptionsEg;
			}
		});

	}

	public reset(): void {
		this.videoList = [];
		this.showVideos = false;
		this.videoLang = null;
		this.langFrom = null;
		this.langTo = null;
		this.stitchToDisplay = null;
	}

	public onSelectStitch(id: string): void {
		this.reset();
		const convertedStitch = this.targetStitchNames.find(item => item["id"] === id);
		if (convertedStitch) {
			this.stitchToDisplay = convertedStitch;
		}
	}

	public showYoutubeList(stitch: Stitch, lang: string): void {
		if (this.videoLang !== lang) {
			this.videoList = [];
			this.showVideos = true;
			this.videoLang = lang;

			if (lang === "kr") {
				this.videoList = this.converterService.getKoreanTutorials(stitch.id)["src"];
			}

			if (lang === "en") {
				this.videoList = this.converterService.getEnglishTutorials(stitch.id)["src"];
			}
		}
	}

	public updateLanguageFrom(language: string): void {
		if (this.langFrom !== language) {
			this.stitchToDisplay = null;
		}
		this.langFrom = language;

		if (this.langFrom && this.langTo) {
			this.updateLanguageFromTo(this.langFrom, this.langTo);
		}

	}
	public updateLanguageTo(language: string): void {
		if (this.langTo !== language) {
			this.stitchToDisplay = null;
		}
		this.langTo = language;
		if (this.langFrom && this.langTo) {

			this.updateLanguageFromTo(this.langFrom, this.langTo);
		}
	}

	private updateLanguageFromTo(langFrom: string, langTo: string): void {
		this.stitchNames = this.converterService.stitchNames.find(item => item.lang === langFrom).stitchNames;
		this.targetStitchNames = this.converterService.stitchNames.find(item => item.lang === langTo).stitchNames;
		console.log(this.stitchNames.length, this.targetStitchNames.length);
	}
}
