import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

// Components
import { ChatComponent } from './components/chat/chat.component';
import { LoginComponent } from './components/login/login.component';

// Skeleton loader
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    NgxSkeletonLoaderModule.forRoot({ animation: 'pulse'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
