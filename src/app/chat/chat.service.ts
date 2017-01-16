import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { MessageComponent } from './message/message.component';

import { Observable } from 'rxjs';

const URL = `http://messages.getsandbox.com/messages`;

@Injectable()
export class ChatService {

  constructor(private _http: Http) { }

  sendMessage(message: MessageComponent) {

    let body = { message: message.text };
    console.log(body);

    return this._http.post(URL, JSON.stringify(body))
      .map((response: Response) => response.json())
      .toPromise()
      .then(res => res.json().data)
      .catch(err => console.log(err));

  }
}
