import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

/*@ts-ignore */
@Component({
  selector: 'app-admin-chat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-chat.component.html',
  styleUrl: './admin-chat.component.css',
})
export class AdminChatComponent {
  chatrooms: any = []

  backend: string = 'http://localhost:3001/chatroom'

  tokenExample: string =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5ODc2IiwiaWF0IjoxNzE3OTYwMDg4LCJleHAiOjE3MTg1NjQ4ODh9.3GLFSkq1z8cZYnHhNgNKeZG5Vwnsm9d1-7FmrxG30ic'

  ngOnInit() {
    fetch(this.backend, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.tokenExample}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        this.chatrooms = data
      })
  }

  message: string = ''
  matricule: string = ''

  setMess(event: any) {
    this.message = event.target.value
  }
  setMatricule(event: any) {
    this.matricule = event.target.value
  }
  sendFirst() {
    const body: any = {
      message: this.message,
      target: this.matricule,
    }

    console.log('The request body is: ', body)

    //send Process
    const target: string = 'http://localhost:3001/messages/admin/send'
    fetch(target, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.tokenExample}`,
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.ok) {
          this.message = ''
          window.location.reload()
        } else {
          console.error('Failed to send message')
        }
      })
      .catch((error) => {
        console.error('Network error:', error)
      })
  }
}
