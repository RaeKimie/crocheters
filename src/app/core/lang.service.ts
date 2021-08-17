import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import krCopy from "./kr.json";
import enCopy from "./en.json";
import { GeneralCopy } from "../interfaces/lang.interface";

@Injectable({
	providedIn: "root"
})
export class LangService {
	public generalCopy$:Observable<GeneralCopy>;
	public language$: Observable<string>;

	private language: BehaviorSubject<any> = new BehaviorSubject("en");
	private generalCopy: BehaviorSubject<GeneralCopy> = new BehaviorSubject(enCopy);

	constructor(
		// eslint-disable-next-line no-unused-vars
	) {
		this.language$ = this.language.asObservable();
		this.generalCopy$ = this.generalCopy.asObservable();
	}

	public updateLang(lang: "kr" | "en"): void {

		this.language.next(lang);

		if (lang === "kr"){
			this.generalCopy.next(krCopy);
		} else {
			this.generalCopy.next(enCopy);
		}
	}
}
