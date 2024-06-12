import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'angular-highcharts';
import { Chart } from 'angular-highcharts';
import { MatDatepickerModule, MatDatepicker } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-acceuilc',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    ChartModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    RouterModule
  ],

  templateUrl: './acceuilc.component.html',
  styleUrls: ['./acceuilc.component.css']
})

export class AcceuilcComponent implements OnInit {
  public myDate = new Date();
  selected: Date | null; 

  constructor() {
    this.selected = null; 
  }

  ngOnInit(): void {
  }

 

  donutChart = new Chart({
    chart: {
      type: 'pie',
      plotShadow: false,
      width:500,
      height:500,
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        innerSize: '88%',
        borderWidth: 5,
        borderColor: '',
        slicedOffset: 10,
        dataLabels: {
          connectorWidth: 0,
        },
      },
    },
    title: {
      verticalAlign: 'middle',
      floating: true,
      text: 'Employés',
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        type: 'pie',
        data: [
          { name: 'Ouvriers', y: 1, color: '#eeeeee' },
          { name: 'Techniciens', y: 2, color: '#003d89' },
          { name: 'Ingénieurs', y: 3, color: '#1161b9' },
          { name: 'Médecins externes', y: 4, color: '#e6f1ff' },
        ],
      },
    ],
  });
}
