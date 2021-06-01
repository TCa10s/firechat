import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Message } from 'src/app/interfaces/message.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Message>; // Leer una colección en particular.
  public chats: Message[] = [];

  constructor(private afs: AngularFirestore) {}

  loadMessages() {
    this.itemsCollection = this.afs.collection<Message>('chats');
    return this.itemsCollection // Escuchamos los cambios en el nodo de chats.
      .valueChanges()
      .pipe(map((messages: Message[]) => this.chats = messages));
  }
}
