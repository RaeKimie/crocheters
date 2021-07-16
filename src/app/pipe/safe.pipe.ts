import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
	name: "safe"
})
export class SafePipe implements PipeTransform {

	constructor(
		// eslint-disable-next-line no-unused-vars
		private sanitizer: DomSanitizer
	) { }

	public transform(url: string): unknown {
		return this.sanitizer.bypassSecurityTrustResourceUrl(url);
	}

}
