import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class LangService {
	public language$: Observable<string>;
	private language: BehaviorSubject<string> = new BehaviorSubject("en")
	constructor() {
		this.language$ = this.language.asObservable();
	}

	public updateLang(lang: "kr" | "en"): void {
		this.language.next(lang);
		console.log(this.language$, "this.lang$");
	}
}
