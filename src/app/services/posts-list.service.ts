import { Injectable } from '@angular/core';
import { IPost } from '../domain/ipost';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PostsListService {


URL = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private _http: Http) { }
getAllPosts(): Observable<IPost[]> {
return this._http
.get(this.URL)
.map((resp: Response) => <IPost []> resp.json());
}
}
