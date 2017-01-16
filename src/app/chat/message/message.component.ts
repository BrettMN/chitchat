import { Component, OnInit, Input } from '@angular/core';
import { Message } from './message';

@Component({
  selector: 'chat-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input()
  content :Message;

  constructor() { 
  }

  ngOnInit() {
  }

}
