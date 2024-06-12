import { Component, Input } from '@angular/core'
import { MatCardModule } from '@angular/material/card'
import { CommonModule } from '@angular/common'

/*@ts-ignore */
@Component({
  selector: 'app-test',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './bon.component.html',
  styleUrls: ['./bon.component.css'],
})
export class BonComponent {
  @Input() bonData: any = {
    nom: '',
    matricule: '',
    medecin: '',
    datedeconsultation: '',
    info: '',
    photo: '',
  }

  allBons: any = []
  role: string = localStorage.getItem('role') as string

  fetchAllBon() {
    try {
      fetch('http://localhost:8083/api/v1/bon', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      }).then((res) => {
        if (res.status === 200) {
          res.json().then((data) => {
            console.log(data)
            this.allBons = data
          })
        } else {
          console.log('error')
        }
      })
    } catch (e) {
      console.log(e)
    }
  }

  updateDateFunc(value: any, id: any) {
    console.log({ value, id })
    console.log('updateDateFunc')

    try {
      fetch('http://localhost:8083/api/v1/bon/' + id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          authorization: 'Bearer ' + localStorage.getItem('token'),
        },
        body: value.target.value as any,
      }).finally(() => {
        alert('bon modifié avec succès')
        this.fetchAllBon()
      })
    } catch (e) {
      alert('erreur lors de modification du bon')
      console.log(e)
    }
  }

  ngOnInit() {
    this.fetchAllBon()
  }
}
