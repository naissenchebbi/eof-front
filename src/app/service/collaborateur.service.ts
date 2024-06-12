import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Collaborateur } from '../model/collaborateur';

@Injectable({
  providedIn: 'root'
})

export class collaborateurService {
  private baseUrl :any= 'http://localhost:8083/collaborateur';// a corriger

  constructor(private http: HttpClient) { }

  saveCollaborateur(collaborateur: any[]): Observable<any> {
    return this.http.post(`${this.baseUrl}`, collaborateur);
  }

    getAllCollaborateur(): Observable<Collaborateur[]> {
      return this.http.get<Collaborateur[]>(`${this.baseUrl}`);
    }
    getCollaborateurByMatricule(matricule:number):Observable<Collaborateur>{
      return this.http.get<Collaborateur>(`${this.baseUrl}/${matricule}`);
    }
    createCollaborateur(collaborateur: Collaborateur): Observable<Object> {
      return this.http.post(`${this.baseUrl}`, collaborateur);
    }
    deleteCollaborateur(matricule: number): Observable<Object> {
      return this.http.delete(`{this.baseUrl}/${matricule}`);
    }
  }
