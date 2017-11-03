import { Injectable } from '@angular/core';
import {server_auth_url, returnJSON} from "../common/project";
import { Observable } from "rxjs/Observable";
import {Http, Response} from '@angular/http';

@Injectable()
export class ServerConnectService {
  constructor(private _http: Http) { }
  POST(api_path:string, data):  Observable<returnJSON> {
    console.log('---sending[POST]--->', JSON.stringify((data)), '--- to ---> ', server_auth_url+api_path)
    return this._http.post(server_auth_url + api_path, JSON.stringify(data))
      .map(res => res.json());
  }
  GET(api_path, data):Observable<returnJSON> {
    console.log('---sending[GET]--->', JSON.stringify((data)), '--- to ---> ', server_auth_url+api_path)
    return this._http.get(server_auth_url + data)
      .map(res => res.json());
  }
}
