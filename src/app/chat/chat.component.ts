import { Component, OnInit } from '@angular/core';
import { MessageComponent } from './message/message.component';
import { ChatService } from './chat.service';

const CHATBOTNAME = 'Echo Bot';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [ChatService]
})
export class ChatComponent implements OnInit {

  userName: string;
  messages: MessageComponent[];
  newMessage: string;

  constructor(private _chatService: ChatService) { }

  ngOnInit() {

    this.newMessage = '';

    this.getUserName(window.location.search.slice(1));
    this.messages = [new MessageComponent('tetst', 'test test ')];


  }

  getUserName(queryString: string) {

    let pairs = queryString.split("&");

    pairs.forEach((v, i) => {
      if (v.indexOf('name=') > -1) {
        this.userName = decodeURI(v.split('=')[1]);
      }
    });

    console.log(this.userName);
    if (this.userName.length == 0) {

      window.location.href = '/';
    }

  }

  sendMessage() {
    console.log(this);
    let newMessage = new MessageComponent(this.userName, this.newMessage);
    this.messages.push(newMessage);
    this.newMessage = '';

    this._chatService.sendMessage(newMessage).then(result => {
      let newResponse = new MessageComponent(CHATBOTNAME, result);

      this.messages.push(newResponse);

    });
  }

}
