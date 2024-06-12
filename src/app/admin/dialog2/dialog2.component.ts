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
import { MatTooltip } from '@angular/material/tooltip'

/*@ts-ignore */
@Component({
  selector: 'app-dialog2',
  standalone: true,
  imports: [
    MatTooltip,
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
  templateUrl: './dialog2.component.html',
  styleUrl: './dialog2.component.css',
})
export class Dialog2Component {
  form: FormGroup

  @Output() close = new EventEmitter<void>()

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<Dialog2Component>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.form = this.fb.group({})
  }

  onNoClick(): void {
    this.dialogRef.close()
  }

  //vars
  matricule: string = ''
  nom: string = ''
  phone: string = ''

  setMatricule(event: any) {
    this.matricule = event.target.value
  }
  setNom(event: any) {
    this.nom = event.target.value
  }
  setPhone(event: any) {
    this.phone = event.target.value
  }

  onSave(): void {
    const body = {
      matricule: this.matricule,
      nom: this.nom,
      phone: this.phone,
    }

    console.log({ body })
    try {
      fetch('http://localhost:8083/collaborateur/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(body),
      }).then((response) => {
        if (response.ok) {
          console.log('Done Saving the User')
          window.location.reload()
        } else {
          console.log('error')
        }
      })
    } catch (e) {
      console.log(e)
    }
    if (this.form.valid) {
      this.dialogRef.close(this.form.value)
    }
  }
}
