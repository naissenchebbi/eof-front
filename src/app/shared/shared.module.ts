import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ChatComponent } from './chat/chat.component';
import { AppComponent } from '../app.component';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    MatCardModule,
    MatInputModule,
    MatInputModule,
    MatInputModule
  ]
})
export class SharedModule { }
