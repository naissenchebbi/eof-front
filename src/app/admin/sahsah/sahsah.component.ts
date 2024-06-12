import {Component,OnInit }from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { AjoutbonComponent } from '../ajoutbon/ajoutbon.component';
import { Router,Route } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-sahsah',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,MatIconModule],
  templateUrl: './sahsah.component.html',
  styleUrl: './sahsah.component.css',

})
export class SahsahComponent {/*implements OnInit {
 
  bonData: any = {
    nom: '',
    matricule: '',
    medecin: '',
    date: '',
    info: '',
    photo: ''
  };

  constructor(private http: HttpClient, private dialog: MatDialog,private router:Router) {}
  

  ngOnInit(): void {
    this.loadBonData();
  }

  loadBonData(): void {
    this.http.get<any>('http://localhost:8083/getBon').subscribe(
      data => {
        this.bonData = data;
      },
      error => {
        console.error('Error fetching bon data', error);
      }
    );
  }

  navigateToAjoutbon() {
    this.router.navigate(['/ajoutbon']);
  }


  /*openAjoutbon(): void {
    const ajoutbonComponentRef = this.dialog.open(AjoutbonComponent, {
      width: '800px'
    });

    ajoutbonComponentRef.afterClosed().subscribe(result => {
      console.log('Le dialogue a été fermé, données reçues:', result);
    });
  }*/

}
