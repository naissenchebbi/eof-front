import { Component } from '@angular/core'
import { Router, RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

/*@ts-ignore */
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  matricule: string = ''
  password: string = ''
  // Setters
  setMatricule(event: any) {
    this.matricule = event.target.value
  }

  setPassword(event: any) {
    this.password = event.target.value
  }
  async login() {
    const body = {
      matricule: this.matricule,
      motdepasse: this.password,
    }

    try {
      const response = await fetch(
        'http://localhost:8083/api/v1/auth/authenticate',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(body),
        }
      )

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      console.log('The response is: ', data)
      //alert(data.message)

      //get the token and the role
      localStorage.setItem('token', data.token)
      localStorage.setItem('role', data.role)
      if (data.status === 200) {
        // window.location.href = '/dashboard'

        switch (data.role) {
          case 'ADMIN':
            window.location.href = '/admin/dashboard'
            break
          case 'COLLABORATEUR':
            window.location.href = '/collaborateur/acceuil'
            break
          case 'MEDECIN':
            window.location.href = '/medecin/acceuil'
            break
        }
      }
    } catch (error) {
      console.error('There was an error!', error)
      alert('Wr')
    }
  }
}
