import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class CommonService {
	URL = 'http://localhost:3000/posts';
	userURL = 'http://localhost:3000/users';
	constructor(private _http: HttpClient) {}
	getPosts() {
		return this._http.get(this.URL);
	}
	addPost(data) {
		return this._http.post(this.URL, data);
	}
	getData(id) {
		return this._http.get(`${this.URL}/${id}`);
	}
	putData(id, data) {
		return this._http.put(`${this.URL}/${id}`, data);
	}
}
