import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { RouterModule, RouterOutlet } from '@angular/router'

/*@ts-ignore */
@Component({
  selector: 'app-csidenav',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterOutlet, RouterModule],
  templateUrl: './csidenav.component.html',
  styleUrl: './csidenav.component.css',
})
export class CsidenavComponent {
  public myDate = new Date()

  verifyToken() {
    if (!localStorage.getItem('token') || !localStorage.getItem('role')) {
      window.location.href = '/connexion'
    } else {
      if (localStorage.getItem('role') !== 'COLLABORATEUR') {
        const role = localStorage.getItem('role')
        if (role === 'ADMIN') {
          window.location.href = '/admin/dashboard'
        } else if (role === 'MEDECIN') {
          window.location.href = '/medecin/acceuil'
        }
      }
    }
  }

  ngOnInit() {
    this.verifyToken()
  }

  logout() {
    localStorage.clear()
    window.location.href = '/connexion'
  }
}
