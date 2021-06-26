import { Component } from '@angular/core';
import { User } from './interfaces/user.interface';
import { ChatService } from './services/chat.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user: User;
  constructor(public _cs: ChatService) {}
}
