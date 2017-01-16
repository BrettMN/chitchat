import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Message } from './message/message';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

const URL = `http://messages.getsandbox.com/messages`;

@Injectable()
export class ChatService {

  constructor(private _http: Http) { }

  sendMessage(message: Message) {

    let body = { message: message.text };

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post(URL, body, options)
      .map((response: Response) => response.json())
      .toPromise();
  }
}
