import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class LangService {
	public language$: Observable<string>;
	private language: BehaviorSubject<any> = new BehaviorSubject(null)
	constructor(
		// eslint-disable-next-line no-unused-vars
	) {
		this.language$ = this.language.asObservable();
	}

	public updateLang(lang: "kr" | "en"): void {
		this.language.next(lang);
	}
}
