import { Injectable } from '@angular/core';
import {server_auth_url, returnJSON} from "../common/project";
import { Observable } from "rxjs/Observable";
import {Http, Response} from '@angular/http';

@Injectable()
export class ServerConnectService {
  constructor(private _http: Http) { }
  POST(url , api_path:string, data):  Observable<returnJSON> {
    console.log('---sending[POST]--->', JSON.stringify((data)), '--- to ---> ', url+api_path)
    return this._http.post(url + api_path, JSON.stringify(data))
      .map(res => res.json());
  }
  GET(url, api_path, data):Observable<returnJSON> {
    console.log('---sending[GET]--->', JSON.stringify((data)), '--- to ---> ', url+api_path)
    return this._http.get(url + data)
      .map(res => res.json());
  }
}
