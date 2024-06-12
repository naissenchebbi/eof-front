import { Component, EventEmitter, Output, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FloatLabelType } from '@angular/material/form-field';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {provideNativeDateAdapter} from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [MatButtonModule,ReactiveFormsModule,MatFormFieldModule,MatCheckboxModule,MatRadioModule,MatInputModule,MatIconModule,MatSelectModule,MatFormFieldModule,MatDatepicker],
  templateUrl: './dialog1.component.html',
  styleUrls: ['./dialog1.component.css']
})
export class Dialog1Component {

form: FormGroup;

 
    @Output() close = new EventEmitter<void>();
  
  
    constructor(
      private fb:FormBuilder,
      public dialogRef: MatDialogRef<Dialog1Component>,
      @Inject(MAT_DIALOG_DATA) public data: any
    ) { 
      this.form=this.fb.group({

      });

    }
  
   
  
    onNoClick(): void {
      this.dialogRef.close();
    }

    onSave(): void {
      if (this.form.valid) {
        this.dialogRef.close(this.form.value);
      }
  
  
  }

}



