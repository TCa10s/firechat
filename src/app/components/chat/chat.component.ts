import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [],
})
export class ChatComponent implements OnInit {
  message: string;

  constructor(public _cs: ChatService) {
    this.message = '';
    this._cs.loadMessages().subscribe();
  }

  ngOnInit(): void {}

  sendMessage() {
    console.log(this.message);
  }
}