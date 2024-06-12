import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { MatCardModule } from '@angular/material/card'
import {
  MatNativeDateModule,
  provideNativeDateAdapter,
} from '@angular/material/core'
import { MatDatepickerModule } from '@angular/material/datepicker'

/*@ts-ignore */
@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatDatepickerModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
  providers: [provideNativeDateAdapter()],
})
export class AdminDashboardComponent {
  //calandar
  public myDate = new Date()

  selected: Date | null

  constructor() {
    this.selected = null
  }

  ngOnInit(): void {}
}
