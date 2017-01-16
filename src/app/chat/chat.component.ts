import { Component, OnInit } from '@angular/core';
import { Message } from './message/message';
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
  messages: Message[];
  newMessage: string;

  constructor(private _chatService: ChatService) { }

  ngOnInit() {

    this.newMessage = '';

    this.getUserName(window.location.search.slice(1));
    this.messages = [];
  }

  getUserName(queryString: string) {

    let pairs = queryString.split("&");

    pairs.forEach((v, i) => {
      if (v.indexOf('name=') > -1) {
        this.userName = decodeURI(v.split('=')[1]);
      }
    });

    if (this.userName.length == 0) {

      window.location.href = '/';
    }
  }

  sendMessage() {
    
    let messageToSend = new Message()
    messageToSend.userName = this.userName;
    messageToSend.text = this.newMessage;

    this.messages.push(messageToSend);
    this.newMessage = '';

    this._chatService.sendMessage(messageToSend)
      .then(result => {

        let newResponse = new Message();
        newResponse.userName = CHATBOTNAME;
        newResponse.text = result.message;

        this.messages.push(newResponse);

        console.log(this);
      });
  }
}
