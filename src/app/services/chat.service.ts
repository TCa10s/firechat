import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Message } from 'src/app/interfaces/message.interface';
import { map } from 'rxjs/operators';

// Importaciones necesarias para la autenticación.
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<Message>; // Leer una colección en particular.
  public chats: Message[] = [];
  public user: any = {};

  constructor(private afs: AngularFirestore, private auth: AngularFireAuth) {
    this.auth.authState.subscribe(user => {

      console.log('Estado del usuario',user);
      if(!user){return};

      this.user.name = user.displayName;
      this.user.uid = user.uid;
    });
  }

  loadMessages() {
    this.itemsCollection = this.afs.collection<Message>('chats', (ref) =>
      ref.orderBy('date', 'asc').limitToLast(5)
    );

    return this.itemsCollection // Escuchamos los cambios en el nodo de chats.
      .valueChanges()
      .pipe(
        map((messages: Message[]) => {
          this.chats = messages;
        })
      );
  }

  addMessage(text: string) {
    // Falta el UID del user
    let message: Message = {
      name: this.user.name,
      message: text,
      date: new Date().getTime(),
      uid: this.user.uid
    };

    return this.itemsCollection.add(message);
  }

  login(provider: string) {
    if(provider === 'google') {
      this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    } else {
      this.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
    }
  }

  logout() {
    this.user = {};
    this.auth.signOut();
  }
}
