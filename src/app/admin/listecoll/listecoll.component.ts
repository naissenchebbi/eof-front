import { AfterViewInit, Component, ViewChild } from '@angular/core'
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator'
import { MatSort, MatSortModule } from '@angular/material/sort'
import { MatTableDataSource, MatTableModule } from '@angular/material/table'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { DialogComponent } from '../dialog/dialog.component'
import { MatDialog, MatDialogModule } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button'
import { Dialog2Component } from '../dialog2/dialog2.component'
import { MatIconModule } from '@angular/material/icon'
import { Dialog3Component } from '../dialog3/dialog3.component'
import { Router, RouterModule } from '@angular/router'

export interface CollaborateurData {
  matricule: string
  nom: string
  tel: string
}

/*@ts-ignore */
@Component({
  selector: 'app-listecoll',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    RouterModule,
  ],
  templateUrl: './listecoll.component.html',
  styleUrls: ['./listecoll.component.css'],
})
export class ListecollComponent implements AfterViewInit {
  displayedColumns: string[] = ['matricule', 'nom', 'tel', 'action']
  dataSource: MatTableDataSource<CollaborateurData>
  collaborateur: any

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  constructor(private dialog: MatDialog, private router: Router) {
    const collaborateur: CollaborateurData[] = [
      { matricule: '11111', nom: 'ahmed', tel: '123456789' },
      { matricule: '12345', nom: 'mohamed', tel: '127845166' },
      { matricule: '22222', nom: 'ahmed', tel: '123456789' },
    ]
    this.dataSource = new MatTableDataSource(collaborateur)
  }
  collaborateurs: any = []
  //fetch collaborateurs
  async fetchCollaborateurs() {
    const token = localStorage.getItem('token')

    try {
      const response = await fetch('http://localhost:8083/collaborateur', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.ok) {
        this.collaborateurs = await response.json()
        this.dataSource = new MatTableDataSource(this.collaborateurs)
      } else {
        console.log('error')
      }
    } catch (e) {
      console.log(e)
    }
  }

  openajouterCollaborateur() {
    const nouvelCollaborateur: CollaborateurData = {
      matricule: '00000',
      nom: 'Nouveau',
      tel: '000000000',
    }
    this.dataSource.data.push(nouvelCollaborateur)
    if (this.paginator) {
      this.paginator._changePageSize(this.paginator.pageSize)
    }
  }

  ngAfterViewInit() {
    // Configurez la pagination et le tri
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    if (filterValue.length != 0) {
      this.dataSource.filter = filterValue.trim().toLowerCase()

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage()
      }
    } else {
      this.dataSource.filter = ''
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage()
      }
    }
  }

  ajouterCollaborateur(): void {
    this.dialog.open(Dialog2Component, {
      width: '50%',
    })
  }

  modifierCollaborateur(row: any) {
    this.dialog.open(Dialog3Component, {
      width: '50%',
      data: row,
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(Dialog2Component, {
      width: '250px',
    })

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Le dialogue a été fermé, données reçues:', result)
    })
  }

  navigateToInfo(matricule: string): void {
    this.router.navigate(['/infocoll', matricule])
  }

  ngOnInit() {
    this.fetchCollaborateurs().then(() => {
      console.log(this.collaborateurs)
    })
  }

  //delete form
  async supprimerCollaborateur(id: string) {
    console.log(id)
    const token = localStorage.getItem('token')

    try {
      const response = await fetch(
        `http://localhost:8083/collaborateur/${id}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      if (response.ok) {
        alert('Collaborateur supprimé avec succès')
        this.fetchCollaborateurs()
      } else {
        alert('Erreur lors de la suppression du collaborateur')
        console.log('error')
      }
    } catch (e) {
      console.log(e)
    }

   

    // try {
    //   const response = await fetch(`http://localhost:8083/collaborateur/${matricule}`, {
    //     method: 'DELETE',
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })

    //   if (response.ok) {
    //     this.fetchCollaborateurs()
    //   } else {
    //     console.log('error')
    //   }
    // } catch (e) {
    //   console.log(e)
    // }
  }
}
