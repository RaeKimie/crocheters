import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
	providedIn: "root"
})
export class ApiService {

	constructor(private http: HttpClient) { }

	// public fetchApi(keyword: string, maxLength: number): Observable<any> {
	//   return this.http.get(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&type=video&part=snippet&maxResults=${maxLength}&q=${keyword}`, {})
	// }
}
