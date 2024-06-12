
import {Component} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {provideNativeDateAdapter} from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


/** @title Datepicker inline calendar example */
@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css'],
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatCardModule, MatDatepickerModule,FormsModule,CommonModule],
})
export class CalendrierComponent {

  public myDate=new Date();



  selected: Date | null; 

  constructor() {
    this.selected = null; 
  }

  ngOnInit(): void {
  }
  
}





 



  
