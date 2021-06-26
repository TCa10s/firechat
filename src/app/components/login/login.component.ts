import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  constructor(private _ch: ChatService) {}

  ngOnInit(): void {}

  loggin(provider: string) {
    this._ch.login(provider);
  }
}
