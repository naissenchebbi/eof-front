import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { SocketService } from '../../services/socket.service'

/*@ts-ignore */
@Component({
  selector: 'app-collaborator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collaborator.component.html',
  styleUrl: './collaborator.component.css',
})
export class CollaboratorChatComponent {
  conversation: any = []
  tokenExample: string = ''
  sendBack: string = 'http://localhost:3001/messages/col/send'
  fetchBack: string = 'http://localhost:3001/messages/col/'

  //define global constructor

  fetchConversation(token: string) {
    console.log('token:', token)
    fetch(this.fetchBack, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.conversation = data
      })
      .catch((error) => {
        console.error('Error fetching messages:', error)
      })
  }
  //is My message
  isMyMessage(message: any): boolean {
    return message.senderAlias === 'collaborator'
  }

  messageInput: any
  getVal(item: any) {
    this.messageInput = item.target.value
  }

  sendMessage() {
    fetch(this.sendBack, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.tokenExample}`,
      },
      body: JSON.stringify({
        message: this.messageInput,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.fetchConversation(this.tokenExample)
        //go to the end of the chat
      })
      .catch((error) => {
        console.error('Error sending message:', error)
      })
  }
  constructor(private socketService: SocketService) {
    this.tokenExample = localStorage.getItem('token') || ''
  }

  ngOnInit() {
    console.log('test :', this.tokenExample)
    const chat: any = document.getElementById('eoc')
    if (chat) {
      console.log(chat)
      chat.scrollTop = chat.scrollHeight
    }
    this.fetchConversation(this.tokenExample)
    this.socketService.on('message').subscribe((message: any) => {
      this.conversation.push(message)
    })
  }
}
