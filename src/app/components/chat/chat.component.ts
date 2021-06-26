import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [],
})
export class ChatComponent implements OnInit {
  message: string;
  element: any;

  constructor(public _cs: ChatService) {
    this.message = '';
    this._cs.loadMessages().subscribe(() => {
      setTimeout(() => {
        this.element.scrollTop = this.element.scrollHeight;
      }, 20);
    });
  }

  ngOnInit(): void {
    this.element = document.getElementById('app-messages');
  }

  get validateUser() {
    return this._cs.chats.some((chat) => this._cs.user.uid == chat.uid);
  }

  sendMessage() {
    console.log(this.message);

    if (this.message.length === 0) { return; }
    this._cs
      .addMessage(this.message)
      .then(() => {
        console.log('Mensaje enviado.');
        this.message = '';
      })
      .catch((err) => {
        console.log('Error al enviar', err);
      });
  }
}
