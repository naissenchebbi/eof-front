import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medecin } from '../model/medecin';

@Injectable({
  providedIn: 'root'
})

export class medecinService {
  private baseUrl :any= 'http://localhost:8083/medecin'; // a corriger

  constructor(private http: HttpClient) { }

  saveMedecin(medecin: any[]): Observable<any> {
    return this.http.post(`${this.baseUrl}`, medecin);
  }
    getAllMedecin(): Observable<Medecin[]> {
      return this.http.get<Medecin[]>(`${this.baseUrl}`);
    }
    getMedecinByMatricule(matricule:number):Observable<Medecin>{
      return this.http.get<Medecin>(`${this.baseUrl}/${matricule}`);
    }
    createMedecin(medecin: Medecin): Observable<Object> {
      return this.http.post(`${this.baseUrl}`, medecin);
    }
    deleteMedecin(matricule: number): Observable<Object> {
      return this.http.delete(`{this.baseUrl}/${matricule}`);
    }
  }
