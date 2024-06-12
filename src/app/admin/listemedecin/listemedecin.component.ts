import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core'
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator'
import { MatSort, MatSortModule } from '@angular/material/sort'
import { MatTableDataSource, MatTableModule } from '@angular/material/table'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { Dialog1Component } from '../dialog1/dialog1.component'
import { DialogComponent } from '../dialog/dialog.component'
import { MatDialog, MatDialogModule } from '@angular/material/dialog'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'

export interface MedecinData {
  id: any
  nom: any
  matricule: any
  specialite: any
}

/*@ts-ignore */
@Component({
  selector: 'app-listemedecin',
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
  ],
  templateUrl: './listemedecin.component.html',
  styleUrls: ['./listemedecin.component.css'],
})
export class ListemedecinComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'nom', 'specialite', 'action']
  dataSource: MatTableDataSource<MedecinData> = new MatTableDataSource()
  medecin: MedecinData[] = []
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.fetchMedecin()
  }

  ngAfterViewInit() {
    // Configure pagination and sorting
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }

  fetchMedecin() {
    fetch('http://localhost:8083/api/v1/medecin', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.medecin = data
        this.dataSource.data = this.medecin // Update the dataSource with fetched data
        console.log(this.medecin)
      })
      .catch((error) => console.error('Error fetching data:', error))
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }

  ajouterMedecin(): void {
    this.dialog.open(DialogComponent, {
      width: '50%',
    })
  }

  modifierMedecin(row: MedecinData): void {
    this.dialog.open(Dialog1Component, {
      width: '50%',
      data: row,
    })
  }

  openajouterMedecin() {
    const nouvelMedecin: MedecinData = {
      id: this.dataSource.data.length + 1,
      nom: 'Nouveau',
      matricule: '000000000',
      specialite: '000000000000000',
    }
    this.dataSource.data.push(nouvelMedecin)
    if (this.paginator) {
      this.paginator._changePageSize(this.paginator.pageSize)
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
    })

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Le dialogue a été fermé, données reçues:', result)
    })
  }
}
