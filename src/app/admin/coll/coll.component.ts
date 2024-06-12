import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
interface TableData {
  matricule: string;
  aide_execptionnelle: string;
  allouche_aid: string;
  frais_medicaux: string;
  aide_social: string;
  anciennete: string;
  autres: string;
  clinique: string;
  couffin_ramadan: string;
  credits: string;
  date: string;
  situation: string;
  tel: string;
  de: string;
}

@Component({
  selector: 'app-coll',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './coll.component.html',
  styleUrls: ['./coll.component.css']
})
export class CollComponent implements OnInit {
  public myDate = new Date();
  matricule: string | null = null; 

  data: TableData[] = [
    {
      matricule: '12345',
      aide_execptionnelle: 'Yes',
      allouche_aid: 'No',
      frais_medicaux: '1000',
      aide_social: 'Yes',
      anciennete: '5 years',
      autres: 'None',
      clinique: 'Clinique A',
      couffin_ramadan: 'Yes',
      credits: '2000',
      date: '2024-05-24',
      situation: 'Active',
      tel: '123-456-7890',
      de: 'N/A'
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.matricule = params.get('matricule');

    });
  }

 

}
