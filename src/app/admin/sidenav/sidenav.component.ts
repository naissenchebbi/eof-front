import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterModule, RouterOutlet } from '@angular/router'

/*@ts-ignore */
@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet, RouterModule],
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
  public myDate = new Date()

  logOut() {
    localStorage.clear()
    window.location.href = '/connexion'
  }
}
