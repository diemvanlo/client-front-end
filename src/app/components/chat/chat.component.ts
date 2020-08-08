import { Component, OnInit } from '@angular/core';
import {MessageService} from './message.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit  {
  title = 'websocket-frontend';
  input;
  constructor(public messageService: MessageService) {}
  sendMessage() {
    if (this.input) {
      this.messageService.sendMessage(this.input);
      this.input = '';
    }
  }
  ngOnInit(): void {
  }
}
