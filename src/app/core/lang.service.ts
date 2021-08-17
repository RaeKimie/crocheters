import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import krCopy from "./kr.json";
import enCopy from "./en.json";

@Injectable({
	providedIn: "root"
})
export class LangService {
	public generalCopy = enCopy;
	public language$: Observable<string>;

	private language: BehaviorSubject<any> = new BehaviorSubject("en");

	constructor(
		// eslint-disable-next-line no-unused-vars
	) {
		this.language$ = this.language.asObservable();
	}

	public updateLang(lang: "kr" | "en"): void {

		this.language.next(lang);

		this.generalCopy = lang === "kr"? krCopy : enCopy;
	}
}
