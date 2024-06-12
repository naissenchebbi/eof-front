import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

export type Body = {
  nom: string
  matricule: string
  motdepasse: string
}

/*@ts-ignore*/
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  // Define the states
  matricule: string = ''
  nom: string = ''
  password: string = ''

  backendRoute: string = 'http://localhost:8083/api/v1/auth/register'

  // Setters
  setMatricule(event: any) {
    this.matricule = event.target.value
  }
  setNom(event: any) {
    this.nom = event.target.value
  }
  setPassword(event: any) {
    this.password = event.target.value
  }

  async signUp() {
    const reqBody: Body = {
      motdepasse: this.password,
      nom: this.nom,
      matricule: this.matricule,
    }

    console.log('The request body is: ', reqBody)
    try {
      const response = await fetch(this.backendRoute, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reqBody),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()
      console.log('The response is: ', data)
      alert(data.message)
      if (data.status === 200) {
        window.location.href = '/connexion'
      }
    } catch (error) {
      alert('Error creating the account')
      console.error('Error:', error)
    }
  }
}
