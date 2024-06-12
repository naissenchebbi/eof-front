import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bon } from '../model/bon';

@Injectable({
  providedIn: 'root'
})

export class BonService {
  private baseUrl :any= 'http://localhost:8083/bon';// a corriger

  constructor(private http: HttpClient) { }

  saveBon(bon: any[]): Observable<any> {
    return this.http.post(`${this.baseUrl}`, bon);
  }

    getAllBon(): Observable<Bon[]> {
      return this.http.get<Bon[]>(`${this.baseUrl}`);
    }
    getBonById(id:number):Observable<Bon>{
      return this.http.get<Bon>(`${this.baseUrl}/${id}`);
    }
    createBon(bon: Bon): Observable<Object> {
      return this.http.post(`${this.baseUrl}`, bon);
    }
    deleteBon(id: number): Observable<Object> {
      return this.http.delete(`{this.baseUrl}/${id}`);
    }
  }
