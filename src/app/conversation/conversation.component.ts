import { CommonModule } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { SocketService } from '../../services/socket.service'

/*@ts-ignore */
@Component({
  selector: 'app-conversation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css'],
})
export class ConversationComponent implements OnInit {
  id: string = ''
  chatrooms: any[] = []
  chatRoomData: any
  conversation: any[] = []
  messageInput: string = ''

  backend: string = 'http://localhost:3001/chatroom'
  backendTarget: string = 'http://localhost:3001/messages/admin/'
  tokenExample: string =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5ODc2IiwiaWF0IjoxNzE3OTYwMDg4LCJleHAiOjE3MTg1NjQ4ODh9.3GLFSkq1z8cZYnHhNgNKeZG5Vwnsm9d1-7FmrxG30ic'

  constructor(private socketService: SocketService) {}

  ngOnInit() {
    this.fetchAllChatRooms()
    this.fetchChatRoom().then(() => {
      if (this.chatRoomData) {
        this.fetchConversation()
      }
    })

    // Listen for incoming messages
    this.socketService.on('message').subscribe((message: any) => {
      this.conversation.push(message)
    })
  }

  fetchAllChatRooms() {
    fetch(this.backend, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.tokenExample}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.chatrooms = data
      })
      .catch((error) => {
        console.error('Error fetching chat rooms:', error)
      })
  }

  async fetchChatRoom() {
    this.id = window.location.pathname.split('/').pop() as string
    try {
      const response = await fetch(`${this.backend}/${this.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.tokenExample}`,
        },
      })
      this.chatRoomData = await response.json()
    } catch (error) {
      console.error('Error fetching chat room:', error)
    }
  }

  fetchConversation() {
    if (this.chatRoomData) {
      fetch(
        `${this.backendTarget}${this.chatRoomData.chatRoom.collaboratorMatricule}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.tokenExample}`,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          this.conversation = data.messages
        })
        .catch((error) => {
          console.error('Error fetching messages:', error)
        })
    }
  }

  isMyMessage(message: any): boolean {
    return message.senderAlias === 'admin'
  }

  getVal(val: any) {
    this.messageInput = val.target.value
  }

  sendMessage() {
    if (this.messageInput.trim() !== '') {
      const newMessage = {
        message: this.messageInput,
        target: this.chatRoomData.chatRoom.collaboratorMatricule,
        chatRoomId: this.chatRoomData.chatRoom.id,
      }

      const target: string = 'http://localhost:3001/messages/admin/send'
      fetch(target, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.tokenExample}`,
        },
        body: JSON.stringify(newMessage),
      })
        .then((response) => {
          if (response.ok) {
            this.messageInput = ''
            this.socketService.emit('message', newMessage) // Emit the message
            this.fetchConversation() // Fetch updated conversation
          } else {
            console.error('Failed to send message')
          }
        })
        .catch((error) => {
          console.error('Network error:', error)
        })
    }
  }
}
