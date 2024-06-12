import { Component, OnInit } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { provideNativeDateAdapter } from '@angular/material/core'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { Router } from '@angular/router'

import { storage } from '../../../firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'

/*@ts-ignore*/
@Component({
  selector: 'app-ajoutbon',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatButtonModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './ajoutbon.component.html',
  styleUrl: './ajoutbon.component.css',
})
export class AjoutbonComponent implements OnInit {
  ngOnInit(): void {}

  ajouterBon() {}

  nom: string = ''
  matricule: string = ''
  medecin: string = ''
  date: string = ''
  photo: string = ''

  role: string = localStorage.getItem('role') as string

  setNom(event: any) {
    this.nom = event.target.value
  }

  setMatricule(event: any) {
    this.matricule = event.target.value
  }

  setMedecin(event: any) {
    this.medecin = event.target.value
  }

  setDate(event: any) {
    this.date = event.target.value
  }

  setPhoto(event: any) {
    this.photo = event.target.value
  }

  //console.log file
  file: any = null
  setFile(event: any) {
    this.file = event.target.files[0]
  }

  //file handler
  ajoutBon() {
    try {
      const id = v4()
      const storageRef = ref(storage, `uploads/${id}`)
      console.log('Uploading file:', this.file)
      uploadBytes(storageRef, this.file)
        .then(() => {
          getDownloadURL(storageRef).then(async (url) => {
            console.log('File uploaded successfully. File URL:', url)
            const bonBody: any = {
              nom: this.nom,
              matricule: this.matricule,
              medecin: this.medecin,
              date: this.date,
              photo: url,
            }
            fetch('http://localhost:8083/api/v1/bon', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(bonBody),
            }).then((response) => {
              console.log(response)
              if (response.status === 200) {
                window.alert('bon ajouté avec succès')
                console.log('bon ajouté avec succès')
              }
            })
          })
        })
        .catch((e) => {
          console.log(e)
        })
    } catch (e) {
      console.log(e)
    }
  }
}
