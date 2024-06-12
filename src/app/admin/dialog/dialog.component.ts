import { Component, EventEmitter, Output, Inject } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { FloatLabelType } from '@angular/material/form-field'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatSelectModule } from '@angular/material/select'
import { MatInputModule } from '@angular/material/input'
import { MatRadioModule } from '@angular/material/radio'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { provideNativeDateAdapter } from '@angular/material/core'
import { MatDatepicker } from '@angular/material/datepicker'
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'

/*@ts-ignore */
@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatRadioModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepicker,
  ],
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent {
  form: FormGroup

  @Output() close = new EventEmitter<void>()

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({})
  }

  onNoClick(): void {
    this.dialogRef.close()
  }

  onSave(): void {
    const body = {
      matricule: this.matricule,
      nom: this.nom,
      specialite: this.specialite,
    }
    console.log(body)

    try {
      fetch('http://localhost:8083/api/v1/medecin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }).then((response) => {
        //check the data
        if (response.ok) {
          alert('Medecin ajouté avec succès')
          window.location.reload()
        } else {
          alert("Erreur lors de l'ajout du medecin")
        }
      })
    } catch (e) {
      alert("Erreur lors de l'ajout du medecin")
      console.log(e)
    }

    if (this.form.valid) {
      this.dialogRef.close(this.form.value)
    }
  }

  matricule: string = ''
  nom: string = ''
  specialite: string = ''

  setMatricule(event: any) {
    this.matricule = event.target.value
  }

  setNom(event: any) {
    this.nom = event.target.value
  }

  setSpecialite(event: any) {
    this.specialite = event.target.value
  }
}
